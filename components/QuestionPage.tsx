"use client";
import { useState, useEffect } from "react";
import { BarChart2, MessageSquare, Globe } from "lucide-react";
import { MultipleChoiceQuestion } from "@/components/question-types/mcq";
import { TextQuestion } from "@/components/question-types/text-ques";
import { useCSRDStore } from "@/store/csrdStore";
import DynamicComments from "./csrd/comments";
import { useParams } from "next/navigation";
import { useSocket } from "@/config/socketProvider";

interface QuestionPageProps {
  id: string;
  questions: any[];
}

export function QuestionPage({ id, questions }: QuestionPageProps) {
  const [activeTab, setActiveTab] = useState("overview");
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [visibleSubQuestions, setVisibleSubQuestions] = useState<Record<string, boolean>>({});
  const [visibleNestedSubQuestions, setVisibleNestedSubQuestions] = useState<Record<string, boolean>>({});

  const params = useParams();
  console.log(params)

  const {setQuestionId , socket , switchRoom} = useSocket();

  const {
    selectedQuestionId,
    setSelectedQuestionId,
    currentQuestions,
    setTopicAndTitle,
  } = useCSRDStore();

  useEffect(() => {
    const savedAnswers = localStorage.getItem("answers");
    if (savedAnswers) {
      setAnswers(JSON.parse(savedAnswers));
    }
  }, []);

  useEffect(() => {
    const topicMap: Record<string, string> = {
      "climate-change": "Climate Change",
      "pollution": "Pollution",
      "water-marine": "Water and Marine Resources",
      "circular-economy": "Resource use and circular economy",
      "biodiversity": "Biodiversity and ecosystems",
      "business-conduct": "Business Conduct",
    };

    setTopicAndTitle("Environment", topicMap[id]);
  }, [id, setTopicAndTitle]);

  useEffect(() => {
    localStorage.setItem("answers", JSON.stringify(answers));
  }, [answers]);

  const totalQuestions = questions.length;
  const answeredQuestions = Object.keys(answers).length;
  const progress = (answeredQuestions / totalQuestions) * 100;

  const handleAnswerChange = (questionId: string, value: any) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));

    // Find the current question - it could be a main question, subquestion, or nested subquestion
    let mainQuestion = questions.find((q) => q.id === questionId);
    let isMainQuestion = true;
    let parentSubQuestion = null;

    // If it's not a main question, look in subquestions
    if (!mainQuestion) {
      for (const q of questions) {
        if (q.subQuestions) {
          const subQ = q.subQuestions.find((sq: any) => sq.id === questionId);
          if (subQ) {
            mainQuestion = subQ;
            isMainQuestion = false;
            break;
          }
          // Look in nested subquestions
          for (const sq of q.subQuestions) {
            if (sq.subQuestions) {
              const nestedSubQ = sq.subQuestions.find(
                (nsq: any) => nsq.id === questionId
              );
              if (nestedSubQ) {
                mainQuestion = nestedSubQ;
                parentSubQuestion = sq;
                isMainQuestion = false;
                break;
              }
            }
          }
        }
      }
    }

    if (mainQuestion) {
      // Handle main question subquestions visibility
      if (isMainQuestion && mainQuestion.subQuestions) {
        const subVisibility: Record<string, boolean> = {};

        mainQuestion.subQuestions.forEach((subQ: any) => {
          const shouldBeVisible = Array.isArray(value)
            ? value.some((selectedId) => {
                const selectedOption = mainQuestion.options.find(
                  (opt: any) => opt.id === selectedId
                );
                return selectedOption?.text === subQ.triggerOption;
              })
            : false;

          subVisibility[subQ.id] = shouldBeVisible;
        });

        setVisibleSubQuestions((prev) => ({ ...prev, ...subVisibility }));
      }

      // Handle nested subquestions visibility
      if (!isMainQuestion && mainQuestion.subQuestions) {
        const nestedVisibility: Record<string, boolean> = {};

        mainQuestion.subQuestions.forEach((nestedSubQ: any) => {
          const shouldBeVisible = Array.isArray(value)
            ? value.some((selectedId) => {
                const selectedOption = mainQuestion.options.find(
                  (opt: any) => opt.id === selectedId
                );
                return selectedOption?.text === nestedSubQ.triggerOption;
              })
            : false;

          nestedVisibility[nestedSubQ.id] = shouldBeVisible;
        });

        setVisibleNestedSubQuestions((prev) => ({
          ...prev,
          ...nestedVisibility,
        }));
      }
    }
  };

  const handleTabChange = (tab: string) => {
    if ((tab === "comments" || tab === "assistant") && !selectedQuestionId) {
      setErrorMessage("Please select a question first!");
      return;
    }
    setErrorMessage(null);
    setActiveTab(tab);
    setIsSidebarOpen(tab !== "overview");
  };

  const handleQuestionSelect = (questionId: string) => {
    setSelectedQuestionId(questionId);
  };

  const renderSidebarContent = () => {
    if (!selectedQuestionId) return null;

    const currentQuestion = questions.find(
      (question) => question.id === selectedQuestionId
    );

    if (!currentQuestion) return null;

    return (
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">
          Question: {currentQuestion.title}
        </h2>
        {activeTab === "comments" && <div>Comments for this question <br /> <DynamicComments /></div>}
        {activeTab === "assistant" && <div>Assistant for this question</div>}
      </div>
    );
  };

  const handleConstructID = (questionID:string) => {
    const { topic, subtopic, id, subtopicId } = params;
    let unique = "";
    if(subtopicId){ 
      unique = `${topic}-${subtopic}-${id}-${subtopicId}-${questionID}`;
      console.log(`${topic}-${subtopic}-${id}-${subtopicId}-${questionID}`) 
      setQuestionId(unique)
      switchRoom(unique)
      // socket && socket.emit("join-room", unique);
      console.log(socket?.id)
      return `${topic}-${subtopic}-${id}-${subtopicId}-${questionID}`;
    }else{
      unique = `${topic}-${subtopic}-${id}-${questionID}`;
      console.log(`${topic}-${subtopic}-${id}-${questionID}`)
      setQuestionId(unique)
      switchRoom(unique)
      // socket && socket.emit("join-room", unique);
      return `${topic}-${subtopic}-${id}-${questionID}`;
    }
  }

  return (
    <div
      className={`max-w-5xl sm:max-w-3xl mx-auto p-6 transition-all duration-300 ${
        isSidebarOpen ? "mr-[20rem]" : ""
      }`}
    >
      {/* Header Section */}
      <div className="sticky top-0 z-10 px-4 rounded-md bg-white dark:bg-gray-900 pb-1">
        <div className="flex gap-4 pt-4 mb-6">
          {["Overview", "Comments", "Assistant"].map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab.toLowerCase())}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                activeTab === tab.toLowerCase()
                  ? "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400"
                  : "text-gray-600 dark:text-gray-400"
              }`}
            >
              {tab === "Overview" && <BarChart2 className="w-4 h-4" />}
              {tab === "Comments" && <MessageSquare className="w-4 h-4" />}
              {tab === "Assistant" && <Globe className="w-4 h-4" />}
              {tab}
            </button>
          ))}
        </div>

        {errorMessage && (
          <div className="text-red-500 text-sm mb-4">{errorMessage}</div>
        )}

        <div className="mb-12">
          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
            <span>
              {answeredQuestions}/{totalQuestions} Questions
            </span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-green-500 dark:bg-green-400 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Questions Section */}
      <div className="space-y-12 mt-12">
        {questions.map((question) => (
          <div
            key={question.id}
            onClick={() => {handleQuestionSelect(question.id);handleConstructID(question.id)}}
            className={`border-b border-gray-200 dark:border-gray-700 pb-8 last:border-b-0 cursor-pointer ${
              selectedQuestionId === question.id
                ? "ring-2 ring-green-500 rounded-lg p-4"
                : ""
            }`}
          >
            <div className="flex items-center gap-4">
              <h2 className="text-2xl mb-4 font-semibold text-gray-900 dark:text-white">
                {question.title}
              </h2>
              {question.description && <p>{question.description}</p>}
            </div>

            {/* Main Question Input */}
            {question.type === "multiple-choice" && (
              <MultipleChoiceQuestion
                options={question.options || []}
                value={answers[question.id] || []}
                onChange={(value) => handleAnswerChange(question.id, value)}
              />
            )}
            {question.type === "text" && (
              <TextQuestion
                value={answers[question.id] || ""}
                onChange={(value) => handleAnswerChange(question.id, value)}
                placeholder="Enter your response here..."
              />
            )}

            {/* First Level Subquestions */}
            {question.subQuestions?.map(
              (subQuestion: any) =>
                visibleSubQuestions[subQuestion.id] && (
                  <div
                    key={subQuestion.id}
                    onClick={() => handleConstructID(subQuestion.id)}
                    className="mt-4 pl-6 border-l-2 border-gray-300"
                  >
                    <h3 className="text-xl mb-2">{subQuestion.title}</h3>

                    {/* Subquestion Input */}
                    {subQuestion.type === "multiple-choice" && (
                      <MultipleChoiceQuestion
                        options={subQuestion.options || []}
                        value={answers[subQuestion.id] || []}
                        onChange={(value) =>
                          handleAnswerChange(subQuestion.id, value)
                        }
                      />
                    )}
                    {subQuestion.type === "text" && (
                      <TextQuestion
                        value={answers[subQuestion.id] || ""}
                        onChange={(value) =>
                          handleAnswerChange(subQuestion.id, value)
                        }
                        placeholder="Enter your response here..."
                      />
                    )}

                    {/* Second Level (Nested) Subquestions */}
                    {subQuestion.subQuestions?.map(
                      (nestedSubQ: any) =>
                        visibleNestedSubQuestions[nestedSubQ.id] && (
                          <div
                            key={nestedSubQ.id}
                            onClick={() => handleConstructID(nestedSubQ.id)}
                            className="mt-4 pl-6 border-l-2 border-gray-300"
                          >
                            <h4 className="text-lg mb-2">{nestedSubQ.title}</h4>

                            {/* Nested Subquestion Input */}
                            {nestedSubQ.type === "multiple-choice" && (
                              <MultipleChoiceQuestion
                                options={nestedSubQ.options || []}
                                value={answers[nestedSubQ.id] || []}
                                onChange={(value) =>
                                  handleAnswerChange(nestedSubQ.id, value)
                                }
                              />
                            )}
                            {nestedSubQ.type === "text" && (
                              <TextQuestion
                                value={answers[nestedSubQ.id] || ""}
                                onChange={(value) =>
                                  handleAnswerChange(nestedSubQ.id, value)
                                }
                                placeholder="Enter your response here..."
                              />
                            )}
                          </div>
                        )
                    )}
                  </div>
                )
            )}
          </div>
        ))}
      </div>

      {/* Side Panel */}
      {isSidebarOpen && (
        <div className="fixed top-0 right-0 h-full w-[20rem] bg-white dark:bg-gray-900 shadow-lg z-50 overflow-y-auto">
          {renderSidebarContent()}
        </div>
      )}
    </div>
  );
}