"use client";
import { QuestionPage } from "@/components/QuestionPage";
import { environmentQuestions } from "@/app/utils/environment";
import { governanceQuestions } from "@/app/utils/governance";
import { socialQuestions } from "@/app/utils/social";

interface PageProps {
  params: {
    id: string;
    subtopicId: string;
    subtopic: string;
  };
}

export default function TopicSubtopicPage({ params }: PageProps) {
  const { id, subtopicId, subtopic } = params;

  // Get the appropriate question set based on topic
  const questionSet =
    subtopic === "environment"
      ? environmentQuestions
      : subtopic === "governance"
      ? governanceQuestions
      : subtopic === "social"
      ? socialQuestions
      : null;

  // Type guard to check if the ID is valid
  const isValidId = (id: string): boolean => {
    if (!questionSet) return false;
    return id in questionSet;
  };

  if (!isValidId(id)) {
    return <div className="p-6 text-red-600">Invalid topic or ID</div>;
  }

  // Convert subtopicId to array index (subtract 1 since URLs start from 1)
  const index = parseInt(subtopicId) - 1;

  // Get questions for this subtopic from the appropriate question set
  const subtopicQuestions = (
    questionSet![id as keyof typeof questionSet][index] as any
  )?.questions;

  if (!subtopicQuestions) {
    return <div className="p-6 text-red-600">Invalid subtopic</div>;
  }

  return (
    <div className="p-6">
      <QuestionPage id={`${id}-${subtopicId}`} questions={subtopicQuestions} />
    </div>
  );
}
