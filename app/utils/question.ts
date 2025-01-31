export type QuestionType = 'multiple-choice' | 'text';

export interface Option {
  id: string;
  text: string;
}

export interface Question {
  id?: string;
  title: string;
  type: QuestionType;
  description?: string;
  options?: Option[];
  required: boolean;
  subQuestions?: Question[];
  triggerOption?: string;
}

export interface Category {
  id: string;
  title: string;
  topic: string;
  relevant?: string;
  questions: Question[];
}

export const questionsData: Category[] = [
  {
    id: 'climate_change_mitigation',
    topic: 'Environment',
    title: 'Climate Change Mitigation',
    relevant:'climate_change_adaptation',
    questions: [
      {
         "id": "q1",
         "title": "Please elaborate why this sub-topic is considered relevant for your company.",
         "type": "text",
         "required": true,
         "description": "The sub-topic is relevant to your business line and does not necessarily need to be material. Materiality will be determined by the outcome of the following questions."
      },
      {
         "id": "q2",
         "title": "Where in your supply chain is this sub-topic of relevance?",
         "type": "multiple-choice",
         "required": true,
         "options": [
            { "id": "opt1", "text": "Upstream value chain" },
            { "id": "opt2", "text": "Own operations" },
            { "id": "opt3", "text": "Downstream value chain" }
         ]
      },
      {
         "id": "q3",
         "title": "Did stakeholders provide any insights for this sub-topic?",
         "type": "multiple-choice",
         "required": true,
         "options": [
            { "id": "opt1", "text": "Yes, at least one stakeholder provided insights for this sub-topic." },
            { "id": "opt2", "text": "No, stakeholders did not provide insights for this sub-topic." }
         ]
      },
      {
         "id": "q4",
         "title": "What insights did the stakeholder(s) provide and how was this information gathered?",
         "type": "text",
         "required": false,
         "description": "This information can be associated with impacts, risks or opportunities."
      },
      {
         "id": "q5",
         "title": "What impact categories, related to Climate change mitigation are applicable to your company?",
         "type": "multiple-choice",
         "required": true,
         "options": [
            { "id": "opt1", "text": "An actual negative impact" },
            { "id": "opt2", "text": "A potential negative impact" },
            { "id": "opt3", "text": "An actual positive impact" },
            { "id": "opt4", "text": "A potential positive impact" },
            { "id": "opt5", "text": "None" }
         ],
         subQuestions: [
            {
               "id": "q5-opt-1-1",
               "title": "How many actual negative impacts did your company identify?",
               "type": "multiple-choice",
               "required": true,
               "triggerOption": "An actual negative impact",
               "options": [
                  { "id": "opt1", "text": "1 actual negative impacts" },
                  { "id": "opt2", "text": "2 actual negative impacts" },
                  { "id": "opt3", "text": "3 actual negative impacts" },
               ],
               subQuestions: [
                  {
                     "id": "q5-opt-1-1-1",
                     "title": "Describe the first actual negative impact in detail.",
                     "type": "text",
                     "triggerOption": "1 actual negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-1-1-2",
                     "title": "What is the identified impact?",
                     "type": "text",
                     "triggerOption": "1 actual negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-1-1-3",
                     "title": "Give a title to the identified impact.",
                     "type": "text",
                     "triggerOption": "1 actual negative impacts",
                     "required": true,
                     "description": "Please keep the impact title concise"
                  },
                  {
                     "id": "q5-opt-1-1-4",
                     "title": "Is this impact clearly material without conducting a materiality assessment?",
                     "type": "text",
                     "triggerOption": "1 actual negative impacts",
                     "required": true,
                     "description": "Selecting yes means that this impact will be automatically material. This is useful for sustainability matters that are very clearly linked to your company's operations. Only use this option when this impact is related to your business's core operations.",
                     "options": [
                        { "id": "opt1", "text": "Yes" },
                        { "id": "opt2", "text": "No" }
                     ]
                  },
                  {
                     "id": "q5-opt-1-1-5",
                     "title": "How do you evaluate the scope of actual negative impacts?",
                     "type": "text",
                     "triggerOption": "1 actual negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-1-1-6",
                     "title": "What is the scope of the actual negative impact due to Climate change mitigation?",
                     "type": "multiple-choice",
                     "triggerOption": "1 actual negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt2", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-1-1-7",
                     "title": "How do you evaluate the scope of actual negative impacts?",
                     "type": "text",
                     "triggerOption": "1 actual negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-1-1-8",
                     "title": "What is the scope of the actual negative impact due to Climate change mitigation?",
                     "type": "multiple-choice",
                     "triggerOption": "1 actual negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt2", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-1-1-9",
                     "title": "How do you determine the extent to which these impacts are irreversible or difficult to remediate? ",
                     "type": "text",
                     "triggerOption": "1 actual negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-1-1-10",
                     "title": "What is the magnitude of the irremediability of your company's actual negative impacts related to Climate change mitigation?",
                     "type": "multiple-choice",
                     "triggerOption": "1 actual negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very easy to remedy" },
                        { "id": "opt2", "text": "Relatively easy to remedy short-term" },
                        { "id": "opt3", "text": "Remediable with effort (time & cost)" },
                        { "id": "opt4", "text": "Very difficult to remedy or long-term" },
                        { "id": "opt5", "text": "Non-remediable/irreversible" }
                     ]
                  },
                  {
                     "id": "q5-opt-1-1-11",
                     "title": "Actual Negative Impact - Score",
                     "type": "text",
                     "triggerOption": "1 actual negative impacts",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q5-opt-1-2-1",
                     "title": "Describe the first actual negative impact in detail.",
                     "type": "text",
                     "triggerOption": "2 actual negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-1-2-2",
                     "title": "What is the identified impact?",
                     "type": "text",
                     "triggerOption": "2 actual negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-1-2-3",
                     "title": "Give a title to the identified impact.",
                     "type": "text",
                     "triggerOption": "2 actual negative impacts",
                     "required": true,
                     "description": "Please keep the impact title concise"
                  },
                  {
                     "id": "q5-opt-1-2-4",
                     "title": "Is this impact clearly material without conducting a materiality assessment?",
                     "type": "text",
                     "triggerOption": "2 actual negative impacts",
                     "required": true,
                     "description": "Selecting yes means that this impact will be automatically material. This is useful for sustainability matters that are very clearly linked to your company's operations. Only use this option when this impact is related to your business's core operations.",
                     "options": [
                        { "id": "opt1", "text": "Yes" },
                        { "id": "opt2", "text": "No" }
                     ]
                  },
                  {
                     "id": "q5-opt-1-2-5",
                     "title": "How do you evaluate the scope of actual negative impacts?",
                     "type": "text",
                     "triggerOption": "2 actual negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-1-2-6",
                     "title": "What is the scope of the actual negative impact due to Climate change mitigation?",
                     "type": "multiple-choice",
                     "triggerOption": "2 actual negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt2", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-1-2-7",
                     "title": "How do you evaluate the scope of actual negative impacts?",
                     "type": "text",
                     "triggerOption": "2 actual negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-1-2-8",
                     "title": "What is the scope of the actual negative impact due to Climate change mitigation?",
                     "type": "multiple-choice",
                     "triggerOption": "2 actual negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt2", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-1-2-9",
                     "title": "How do you determine the extent to which these impacts are irreversible or difficult to remediate? ",
                     "type": "text",
                     "triggerOption": "2 actual negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-1-2-10",
                     "title": "What is the magnitude of the irremediability of your company's actual negative impacts related to Climate change mitigation?",
                     "type": "multiple-choice",
                     "triggerOption": "2 actual negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very easy to remedy" },
                        { "id": "opt2", "text": "Relatively easy to remedy short-term" },
                        { "id": "opt3", "text": "Remediable with effort (time & cost)" },
                        { "id": "opt4", "text": "Very difficult to remedy or long-term" },
                        { "id": "opt5", "text": "Non-remediable/irreversible" }
                     ]
                  },
                  {
                     "id": "q5-opt-1-2-11",
                     "title": "Actual Negative Impact - Score",
                     "type": "text",
                     "triggerOption": "2 actual negative impacts",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q5-opt-1-2-12",
                     "title": "Describe the Second actual negative impact in detail.",
                     "type": "text",
                     "triggerOption": "2 actual negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-1-2-13",
                     "title": "What is the identified impact?",
                     "type": "text",
                     "triggerOption": "2 actual negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-1-2-14",
                     "title": "Give a title to the identified impact.",
                     "type": "text",
                     "triggerOption": "2 actual negative impacts",
                     "required": true,
                     "description": "Please keep the impact title concise"
                  },
                  {
                     "id": "q5-opt-1-2-15",
                     "title": "Is this impact clearly material without conducting a materiality assessment?",
                     "type": "text",
                     "triggerOption": "2 actual negative impacts",
                     "required": true,
                     "description": "Selecting yes means that this impact will be automatically material. This is useful for sustainability matters that are very clearly linked to your company's operations. Only use this option when this impact is related to your business's core operations.",
                     "options": [
                        { "id": "opt1", "text": "Yes" },
                        { "id": "opt2", "text": "No" }
                     ]
                  },
                  {
                     "id": "q5-opt-1-2-16",
                     "title": "How do you evaluate the scope of actual negative impacts?",
                     "type": "text",
                     "triggerOption": "2 actual negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-1-2-17",
                     "title": "What is the scope of the actual negative impact due to Climate change mitigation?",
                     "type": "multiple-choice",
                     "triggerOption": "2 actual negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt2", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-1-2-18",
                     "title": "How do you evaluate the scope of actual negative impacts?",
                     "type": "text",
                     "triggerOption": "2 actual negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-1-2-19",
                     "title": "What is the scope of the actual negative impact due to Climate change mitigation?",
                     "type": "multiple-choice",
                     "triggerOption": "2 actual negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt2", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-1-2-20",
                     "title": "How do you determine the extent to which these impacts are irreversible or difficult to remediate? ",
                     "type": "text",
                     "triggerOption": "2 actual negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-1-2-21",
                     "title": "What is the magnitude of the irremediability of your company's actual negative impacts related to Climate change mitigation?",
                     "type": "multiple-choice",
                     "triggerOption": "2 actual negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very easy to remedy" },
                        { "id": "opt2", "text": "Relatively easy to remedy short-term" },
                        { "id": "opt3", "text": "Remediable with effort (time & cost)" },
                        { "id": "opt4", "text": "Very difficult to remedy or long-term" },
                        { "id": "opt5", "text": "Non-remediable/irreversible" }
                     ]
                  },
                  {
                     "id": "q5-opt-1-2-22",
                     "title": "Actual Negative Impact - Score",
                     "type": "text",
                     "triggerOption": "2 actual negative impacts",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q5-opt-1-3-1",
                     "title": "Describe the first actual negative impact in detail.",
                     "type": "text",
                     "triggerOption": "3 actual negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-1-3-2",
                     "title": "What is the identified impact?",
                     "type": "text",
                     "triggerOption": "3 actual negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-1-3-3",
                     "title": "Give a title to the identified impact.",
                     "type": "text",
                     "triggerOption": "3 actual negative impacts",
                     "required": true,
                     "description": "Please keep the impact title concise"
                  },
                  {
                     "id": "q5-opt-1-3-4",
                     "title": "Is this impact clearly material without conducting a materiality assessment?",
                     "type": "text",
                     "triggerOption": "3 actual negative impacts",
                     "required": true,
                     "description": "Selecting yes means that this impact will be automatically material. This is useful for sustainability matters that are very clearly linked to your company's operations. Only use this option when this impact is related to your business's core operations.",
                     "options": [
                        { "id": "opt1", "text": "Yes" },
                        { "id": "opt3", "text": "No" }
                     ]
                  },
                  {
                     "id": "q5-opt-1-3-5",
                     "title": "How do you evaluate the scope of actual negative impacts?",
                     "type": "text",
                     "triggerOption": "3 actual negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-1-3-6",
                     "title": "What is the scope of the actual negative impact due to Climate change mitigation?",
                     "type": "multiple-choice",
                     "triggerOption": "3 actual negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt3", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-1-3-7",
                     "title": "How do you evaluate the scope of actual negative impacts?",
                     "type": "text",
                     "triggerOption": "3 actual negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-1-3-8",
                     "title": "What is the scope of the actual negative impact due to Climate change mitigation?",
                     "type": "multiple-choice",
                     "triggerOption": "3 actual negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt3", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-1-3-9",
                     "title": "How do you determine the extent to which these impacts are irreversible or difficult to remediate? ",
                     "type": "text",
                     "triggerOption": "3 actual negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-1-3-10",
                     "title": "What is the magnitude of the irremediability of your company's actual negative impacts related to Climate change mitigation?",
                     "type": "multiple-choice",
                     "triggerOption": "3 actual negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very easy to remedy" },
                        { "id": "opt3", "text": "Relatively easy to remedy short-term" },
                        { "id": "opt3", "text": "Remediable with effort (time & cost)" },
                        { "id": "opt4", "text": "Very difficult to remedy or long-term" },
                        { "id": "opt5", "text": "Non-remediable/irreversible" }
                     ]
                  },
                  {
                     "id": "q5-opt-1-3-11",
                     "title": "Actual Negative Impact - Score",
                     "type": "text",
                     "triggerOption": "3 actual negative impacts",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q5-opt-1-3-12",
                     "title": "Describe the second actual negative impact in detail.",
                     "type": "text",
                     "triggerOption": "3 actual negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-1-3-13",
                     "title": "What is the identified impact?",
                     "type": "text",
                     "triggerOption": "3 actual negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-1-3-14",
                     "title": "Give a title to the identified impact.",
                     "type": "text",
                     "triggerOption": "3 actual negative impacts",
                     "required": true,
                     "description": "Please keep the impact title concise"
                  },
                  {
                     "id": "q5-opt-1-3-15",
                     "title": "Is this impact clearly material without conducting a materiality assessment?",
                     "type": "text",
                     "triggerOption": "3 actual negative impacts",
                     "required": true,
                     "description": "Selecting yes means that this impact will be automatically material. This is useful for sustainability matters that are very clearly linked to your company's operations. Only use this option when this impact is related to your business's core operations.",
                     "options": [
                        { "id": "opt1", "text": "Yes" },
                        { "id": "opt3", "text": "No" }
                     ]
                  },
                  {
                     "id": "q5-opt-1-3-16",
                     "title": "How do you evaluate the scope of actual negative impacts?",
                     "type": "text",
                     "triggerOption": "3 actual negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-1-3-17",
                     "title": "What is the scope of the actual negative impact due to Climate change mitigation?",
                     "type": "multiple-choice",
                     "triggerOption": "3 actual negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt3", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-1-3-18",
                     "title": "How do you evaluate the scope of actual negative impacts?",
                     "type": "text",
                     "triggerOption": "3 actual negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-1-3-19",
                     "title": "What is the scope of the actual negative impact due to Climate change mitigation?",
                     "type": "multiple-choice",
                     "triggerOption": "3 actual negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt3", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-1-3-20",
                     "title": "How do you determine the extent to which these impacts are irreversible or difficult to remediate? ",
                     "type": "text",
                     "triggerOption": "3 actual negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-1-3-21",
                     "title": "What is the magnitude of the irremediability of your company's actual negative impacts related to Climate change mitigation?",
                     "type": "multiple-choice",
                     "triggerOption": "3 actual negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very easy to remedy" },
                        { "id": "opt3", "text": "Relatively easy to remedy short-term" },
                        { "id": "opt3", "text": "Remediable with effort (time & cost)" },
                        { "id": "opt4", "text": "Very difficult to remedy or long-term" },
                        { "id": "opt5", "text": "Non-remediable/irreversible" }
                     ]
                  },
                  {
                     "id": "q5-opt-1-3-22",
                     "title": "Actual Negative Impact - Score",
                     "type": "text",
                     "triggerOption": "3 actual negative impacts",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q5-opt-1-3-23",
                     "title": "Describe the third actual negative impact in detail.",
                     "type": "text",
                     "triggerOption": "3 actual negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-1-3-24",
                     "title": "What is the identified impact?",
                     "type": "text",
                     "triggerOption": "3 actual negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-1-3-25",
                     "title": "Give a title to the identified impact.",
                     "type": "text",
                     "triggerOption": "3 actual negative impacts",
                     "required": true,
                     "description": "Please keep the impact title concise"
                  },
                  {
                     "id": "q5-opt-1-3-26",
                     "title": "Is this impact clearly material without conducting a materiality assessment?",
                     "type": "text",
                     "triggerOption": "3 actual negative impacts",
                     "required": true,
                     "description": "Selecting yes means that this impact will be automatically material. This is useful for sustainability matters that are very clearly linked to your company's operations. Only use this option when this impact is related to your business's core operations.",
                     "options": [
                        { "id": "opt1", "text": "Yes" },
                        { "id": "opt3", "text": "No" }
                     ]
                  },
                  {
                     "id": "q5-opt-1-3-27",
                     "title": "How do you evaluate the scope of actual negative impacts?",
                     "type": "text",
                     "triggerOption": "3 actual negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-1-3-28",
                     "title": "What is the scope of the actual negative impact due to Climate change mitigation?",
                     "type": "multiple-choice",
                     "triggerOption": "3 actual negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt3", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-1-3-29",
                     "title": "How do you evaluate the scope of actual negative impacts?",
                     "type": "text",
                     "triggerOption": "3 actual negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-1-3-30",
                     "title": "What is the scope of the actual negative impact due to Climate change mitigation?",
                     "type": "multiple-choice",
                     "triggerOption": "3 actual negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt3", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-1-3-31",
                     "title": "How do you determine the extent to which these impacts are irreversible or difficult to remediate? ",
                     "type": "text",
                     "triggerOption": "3 actual negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-1-3-32",
                     "title": "What is the magnitude of the irremediability of your company's actual negative impacts related to Climate change mitigation?",
                     "type": "multiple-choice",
                     "triggerOption": "3 actual negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very easy to remedy" },
                        { "id": "opt3", "text": "Relatively easy to remedy short-term" },
                        { "id": "opt3", "text": "Remediable with effort (time & cost)" },
                        { "id": "opt4", "text": "Very difficult to remedy or long-term" },
                        { "id": "opt5", "text": "Non-remediable/irreversible" }
                     ]
                  },
                  {
                     "id": "q5-opt-1-3-33",
                     "title": "Actual Negative Impact - Score",
                     "type": "text",
                     "triggerOption": "3 actual negative impacts",
                     "required": true,
                     "description": "END"
                  },
               ],
            },
            {
               "id": "q5-opt-2-1",
               "title": "How many potential negative impacts did your company identify?",
               "type": "multiple-choice",
               "required": true,
               "triggerOption": "An potential negative impact",
               "options": [
                  { "id": "opt1", "text": "1 potential negative impacts" },
                  { "id": "opt2", "text": "2 potential negative impacts" },
                  { "id": "opt3", "text": "3 potential negative impacts" },
               ],
               subQuestions: [
                  {
                     "id": "q5-opt-2-1-1",
                     "title": "Describe the first potential negative impact in detail.",
                     "type": "text",
                     "triggerOption": "1 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-1-2",
                     "title": "What is the identified impact?",
                     "type": "text",
                     "triggerOption": "1 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-1-3",
                     "title": "Give a title to the identified impact.",
                     "type": "text",
                     "triggerOption": "1 potential negative impacts",
                     "required": true,
                     "description": "Please keep the impact title concise"
                  },
                  {
                     "id": "q5-opt-2-1-4",
                     "title": "Is this impact clearly material without conducting a materiality assessment?",
                     "type": "text",
                     "triggerOption": "1 potential negative impacts",
                     "required": true,
                     "description": "Selecting yes means that this impact will be automatically material. This is useful for sustainability matters that are very clearly linked to your company's operations. Only use this option when this impact is related to your business's core operations.",
                     "options": [
                        { "id": "opt1", "text": "Yes" },
                        { "id": "opt2", "text": "No" }
                     ]
                  },
                  {
                     "id": "q5-opt-2-1-5",
                     "title": "How do you evaluate the scope of potential negative impacts?",
                     "type": "text",
                     "triggerOption": "1 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-1-6",
                     "title": "What is the scope of the potential negative impact due to Climate change mitigation?",
                     "type": "multiple-choice",
                     "triggerOption": "1 potential negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt2", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-2-1-7",
                     "title": "How do you evaluate the scope of potential negative impacts?",
                     "type": "text",
                     "triggerOption": "1 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-1-8",
                     "title": "What is the scope of the potential negative impact due to Climate change mitigation?",
                     "type": "multiple-choice",
                     "triggerOption": "1 potential negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt2", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-2-1-9",
                     "title": "How do you determine the extent to which these impacts are irreversible or difficult to remediate? ",
                     "type": "text",
                     "triggerOption": "1 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-1-10",
                     "title": "What is the magnitude of the irremediability of your company's potential negative impacts related to Climate change mitigation?",
                     "type": "multiple-choice",
                     "triggerOption": "1 potential negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very easy to remedy" },
                        { "id": "opt2", "text": "Relatively easy to remedy short-term" },
                        { "id": "opt3", "text": "Remediable with effort (time & cost)" },
                        { "id": "opt4", "text": "Very difficult to remedy or long-term" },
                        { "id": "opt5", "text": "Non-remediable/irreversible" }
                     ]
                  },
                  {
                     "id": "q5-opt-2-1-11",
                     "title": "Does the impact relate to human rights?",
                     "type": "text",
                     "triggerOption": "1 potential negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Yes" },
                        { "id": "opt2", "text": "No" }
                     ]
                  },
                  {
                     "id": "q5-opt-2-1-12",
                     "title": "What criteria does your company use to estimate the likelihood and timelines for potential negative impacts related to Climate change mitigation?",
                     "type": "text",
                     "triggerOption": "1 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-1-13",
                     "title": "What criteria does your company use to estimate the likelihood and timelines for potential negative impacts related to Climate change mitigation?",
                     "type": "text",
                     "triggerOption": "1 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-1-14",
                     "title": "What is the potential likelihood of these negative impacts to occur within a given period?",
                     "type": "multiple-choice",
                     "triggerOption": "1 potential negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very unlikely" },
                        { "id": "opt2", "text": "Unlikely" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Likely" },
                        { "id": "opt5", "text": "Highly likely" }
                     ]
                  },
                  {
                     "id": "q5-opt-2-1-15",
                     "title": "potential negative Impact - Score",
                     "type": "text",
                     "triggerOption": "1 potential negative impacts",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q5-opt-2-2-1",
                     "title": "Describe the first potential negative impact in detail.",
                     "type": "text",
                     "triggerOption": "2 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-2-2",
                     "title": "What is the identified impact?",
                     "type": "text",
                     "triggerOption": "2 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-2-3",
                     "title": "Give a title to the identified impact.",
                     "type": "text",
                     "triggerOption": "2 potential negative impacts",
                     "required": true,
                     "description": "Please keep the impact title concise"
                  },
                  {
                     "id": "q5-opt-2-2-4",
                     "title": "Is this impact clearly material without conducting a materiality assessment?",
                     "type": "text",
                     "triggerOption": "2 potential negative impacts",
                     "required": true,
                     "description": "Selecting yes means that this impact will be automatically material. This is useful for sustainability matters that are very clearly linked to your company's operations. Only use this option when this impact is related to your business's core operations.",
                     "options": [
                        { "id": "opt1", "text": "Yes" },
                        { "id": "opt2", "text": "No" }
                     ]
                  },
                  {
                     "id": "q5-opt-2-2-5",
                     "title": "How do you evaluate the scope of potential negative impacts?",
                     "type": "text",
                     "triggerOption": "2 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-2-6",
                     "title": "What is the scope of the potential negative impact due to Climate change mitigation?",
                     "type": "multiple-choice",
                     "triggerOption": "2 potential negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt2", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-2-2-7",
                     "title": "How do you evaluate the scope of potential negative impacts?",
                     "type": "text",
                     "triggerOption": "2 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-2-8",
                     "title": "What is the scope of the potential negative impact due to Climate change mitigation?",
                     "type": "multiple-choice",
                     "triggerOption": "2 potential negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt2", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-2-2-9",
                     "title": "How do you determine the extent to which these impacts are irreversible or difficult to remediate? ",
                     "type": "text",
                     "triggerOption": "2 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-2-10",
                     "title": "What is the magnitude of the irremediability of your company's potential negative impacts related to Climate change mitigation?",
                     "type": "multiple-choice",
                     "triggerOption": "2 potential negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very easy to remedy" },
                        { "id": "opt2", "text": "Relatively easy to remedy short-term" },
                        { "id": "opt3", "text": "Remediable with effort (time & cost)" },
                        { "id": "opt4", "text": "Very difficult to remedy or long-term" },
                        { "id": "opt5", "text": "Non-remediable/irreversible" }
                     ]
                  },
                  {
                     "id": "q5-opt-2-2-11",
                     "title": "Does the impact relate to human rights?",
                     "type": "text",
                     "triggerOption": "2 potential negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Yes" },
                        { "id": "opt2", "text": "No" }
                     ]
                  },
                  {
                     "id": "q5-opt-2-2-12",
                     "title": "What criteria does your company use to estimate the likelihood and timelines for potential negative impacts related to Climate change mitigation?",
                     "type": "text",
                     "triggerOption": "2 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-2-13",
                     "title": "What criteria does your company use to estimate the likelihood and timelines for potential negative impacts related to Climate change mitigation?",
                     "type": "text",
                     "triggerOption": "2 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-2-14",
                     "title": "What is the potential likelihood of these negative impacts to occur within a given period?",
                     "type": "multiple-choice",
                     "triggerOption": "2 potential negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very unlikely" },
                        { "id": "opt2", "text": "Unlikely" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Likely" },
                        { "id": "opt5", "text": "Highly likely" }
                     ]
                  },
                  {
                     "id": "q5-opt-2-2-15",
                     "title": "potential negative Impact - Score",
                     "type": "text",
                     "triggerOption": "2 potential negative impacts",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q5-opt-2-2-16",
                     "title": "Describe the first potential negative impact in detail.",
                     "type": "text",
                     "triggerOption": "2 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-2-17",
                     "title": "What is the identified impact?",
                     "type": "text",
                     "triggerOption": "2 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-2-18",
                     "title": "Give a title to the identified impact.",
                     "type": "text",
                     "triggerOption": "2 potential negative impacts",
                     "required": true,
                     "description": "Please keep the impact title concise"
                  },
                  {
                     "id": "q5-opt-2-2-19",
                     "title": "Is this impact clearly material without conducting a materiality assessment?",
                     "type": "text",
                     "triggerOption": "2 potential negative impacts",
                     "required": true,
                     "description": "Selecting yes means that this impact will be automatically material. This is useful for sustainability matters that are very clearly linked to your company's operations. Only use this option when this impact is related to your business's core operations.",
                     "options": [
                        { "id": "opt1", "text": "Yes" },
                        { "id": "opt2", "text": "No" }
                     ]
                  },
                  {
                     "id": "q5-opt-2-2-20",
                     "title": "How do you evaluate the scope of potential negative impacts?",
                     "type": "text",
                     "triggerOption": "2 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-2-21",
                     "title": "What is the scope of the potential negative impact due to Climate change mitigation?",
                     "type": "multiple-choice",
                     "triggerOption": "2 potential negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt2", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-2-2-22",
                     "title": "How do you evaluate the scope of potential negative impacts?",
                     "type": "text",
                     "triggerOption": "2 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-2-23",
                     "title": "What is the scope of the potential negative impact due to Climate change mitigation?",
                     "type": "multiple-choice",
                     "triggerOption": "2 potential negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt2", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-2-2-24",
                     "title": "How do you determine the extent to which these impacts are irreversible or difficult to remediate? ",
                     "type": "text",
                     "triggerOption": "2 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-2-25",
                     "title": "What is the magnitude of the irremediability of your company's potential negative impacts related to Climate change mitigation?",
                     "type": "multiple-choice",
                     "triggerOption": "2 potential negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very easy to remedy" },
                        { "id": "opt2", "text": "Relatively easy to remedy short-term" },
                        { "id": "opt3", "text": "Remediable with effort (time & cost)" },
                        { "id": "opt4", "text": "Very difficult to remedy or long-term" },
                        { "id": "opt5", "text": "Non-remediable/irreversible" }
                     ]
                  },
                  {
                     "id": "q5-opt-2-2-26",
                     "title": "Does the impact relate to human rights?",
                     "type": "text",
                     "triggerOption": "2 potential negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Yes" },
                        { "id": "opt2", "text": "No" }
                     ]
                  },
                  {
                     "id": "q5-opt-2-2-27",
                     "title": "What criteria does your company use to estimate the likelihood and timelines for potential negative impacts related to Climate change mitigation?",
                     "type": "text",
                     "triggerOption": "2 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-2-28",
                     "title": "What criteria does your company use to estimate the likelihood and timelines for potential negative impacts related to Climate change mitigation?",
                     "type": "text",
                     "triggerOption": "2 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-2-29",
                     "title": "What is the potential likelihood of these negative impacts to occur within a given period?",
                     "type": "multiple-choice",
                     "triggerOption": "2 potential negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very unlikely" },
                        { "id": "opt2", "text": "Unlikely" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Likely" },
                        { "id": "opt5", "text": "Highly likely" }
                     ]
                  },
                  {
                     "id": "q5-opt-2-2-30",
                     "title": "potential negative Impact - Score",
                     "type": "text",
                     "triggerOption": "2 potential negative impacts",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q5-opt-2-3-1",
                     "title": "Describe the first potential negative impact in detail.",
                     "type": "text",
                     "triggerOption": "3 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-3-2",
                     "title": "What is the identified impact?",
                     "type": "text",
                     "triggerOption": "3 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-3-3",
                     "title": "Give a title to the identified impact.",
                     "type": "text",
                     "triggerOption": "3 potential negative impacts",
                     "required": true,
                     "description": "Please keep the impact title concise"
                  },
                  {
                     "id": "q5-opt-2-3-4",
                     "title": "Is this impact clearly material without conducting a materiality assessment?",
                     "type": "text",
                     "triggerOption": "3 potential negative impacts",
                     "required": true,
                     "description": "Selecting yes means that this impact will be automatically material. This is useful for sustainability matters that are very clearly linked to your company's operations. Only use this option when this impact is related to your business's core operations.",
                     "options": [
                        { "id": "opt1", "text": "Yes" },
                        { "id": "opt2", "text": "No" }
                     ]
                  },
                  {
                     "id": "q5-opt-2-3-5",
                     "title": "How do you evaluate the scope of potential negative impacts?",
                     "type": "text",
                     "triggerOption": "3 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-3-6",
                     "title": "What is the scope of the potential negative impact due to Climate change mitigation?",
                     "type": "multiple-choice",
                     "triggerOption": "3 potential negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt2", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-2-3-7",
                     "title": "How do you evaluate the scope of potential negative impacts?",
                     "type": "text",
                     "triggerOption": "3 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-3-8",
                     "title": "What is the scope of the potential negative impact due to Climate change mitigation?",
                     "type": "multiple-choice",
                     "triggerOption": "3 potential negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt2", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-2-3-9",
                     "title": "How do you determine the extent to which these impacts are irreversible or difficult to remediate? ",
                     "type": "text",
                     "triggerOption": "3 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-3-10",
                     "title": "What is the magnitude of the irremediability of your company's potential negative impacts related to Climate change mitigation?",
                     "type": "multiple-choice",
                     "triggerOption": "3 potential negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very easy to remedy" },
                        { "id": "opt2", "text": "Relatively easy to remedy short-term" },
                        { "id": "opt3", "text": "Remediable with effort (time & cost)" },
                        { "id": "opt4", "text": "Very difficult to remedy or long-term" },
                        { "id": "opt5", "text": "Non-remediable/irreversible" }
                     ]
                  },
                  {
                     "id": "q5-opt-2-3-11",
                     "title": "Does the impact relate to human rights?",
                     "type": "text",
                     "triggerOption": "3 potential negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Yes" },
                        { "id": "opt2", "text": "No" }
                     ]
                  },
                  {
                     "id": "q5-opt-2-3-12",
                     "title": "What criteria does your company use to estimate the likelihood and timelines for potential negative impacts related to Climate change mitigation?",
                     "type": "text",
                     "triggerOption": "3 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-3-13",
                     "title": "What criteria does your company use to estimate the likelihood and timelines for potential negative impacts related to Climate change mitigation?",
                     "type": "text",
                     "triggerOption": "3 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-3-14",
                     "title": "What is the potential likelihood of these negative impacts to occur within a given period?",
                     "type": "multiple-choice",
                     "triggerOption": "3 potential negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very unlikely" },
                        { "id": "opt2", "text": "Unlikely" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Likely" },
                        { "id": "opt5", "text": "Highly likely" }
                     ]
                  },
                  {
                     "id": "q5-opt-2-3-15",
                     "title": "potential negative Impact - Score",
                     "type": "text",
                     "triggerOption": "3 potential negative impacts",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q5-opt-2-3-16",
                     "title": "Describe the first potential negative impact in detail.",
                     "type": "text",
                     "triggerOption": "3 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-3-17",
                     "title": "What is the identified impact?",
                     "type": "text",
                     "triggerOption": "3 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-3-18",
                     "title": "Give a title to the identified impact.",
                     "type": "text",
                     "triggerOption": "3 potential negative impacts",
                     "required": true,
                     "description": "Please keep the impact title concise"
                  },
                  {
                     "id": "q5-opt-2-3-19",
                     "title": "Is this impact clearly material without conducting a materiality assessment?",
                     "type": "text",
                     "triggerOption": "3 potential negative impacts",
                     "required": true,
                     "description": "Selecting yes means that this impact will be automatically material. This is useful for sustainability matters that are very clearly linked to your company's operations. Only use this option when this impact is related to your business's core operations.",
                     "options": [
                        { "id": "opt1", "text": "Yes" },
                        { "id": "opt2", "text": "No" }
                     ]
                  },
                  {
                     "id": "q5-opt-2-3-20",
                     "title": "How do you evaluate the scope of potential negative impacts?",
                     "type": "text",
                     "triggerOption": "3 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-3-21",
                     "title": "What is the scope of the potential negative impact due to Climate change mitigation?",
                     "type": "multiple-choice",
                     "triggerOption": "3 potential negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt2", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-2-3-22",
                     "title": "How do you evaluate the scope of potential negative impacts?",
                     "type": "text",
                     "triggerOption": "3 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-3-23",
                     "title": "What is the scope of the potential negative impact due to Climate change mitigation?",
                     "type": "multiple-choice",
                     "triggerOption": "3 potential negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt2", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-2-3-24",
                     "title": "How do you determine the extent to which these impacts are irreversible or difficult to remediate? ",
                     "type": "text",
                     "triggerOption": "3 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-3-25",
                     "title": "What is the magnitude of the irremediability of your company's potential negative impacts related to Climate change mitigation?",
                     "type": "multiple-choice",
                     "triggerOption": "3 potential negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very easy to remedy" },
                        { "id": "opt2", "text": "Relatively easy to remedy short-term" },
                        { "id": "opt3", "text": "Remediable with effort (time & cost)" },
                        { "id": "opt4", "text": "Very difficult to remedy or long-term" },
                        { "id": "opt5", "text": "Non-remediable/irreversible" }
                     ]
                  },
                  {
                     "id": "q5-opt-2-3-26",
                     "title": "Does the impact relate to human rights?",
                     "type": "text",
                     "triggerOption": "3 potential negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Yes" },
                        { "id": "opt2", "text": "No" }
                     ]
                  },
                  {
                     "id": "q5-opt-2-3-27",
                     "title": "What criteria does your company use to estimate the likelihood and timelines for potential negative impacts related to Climate change mitigation?",
                     "type": "text",
                     "triggerOption": "3 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-3-28",
                     "title": "What criteria does your company use to estimate the likelihood and timelines for potential negative impacts related to Climate change mitigation?",
                     "type": "text",
                     "triggerOption": "3 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-3-29",
                     "title": "What is the potential likelihood of these negative impacts to occur within a given period?",
                     "type": "multiple-choice",
                     "triggerOption": "3 potential negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very unlikely" },
                        { "id": "opt2", "text": "Unlikely" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Likely" },
                        { "id": "opt5", "text": "Highly likely" }
                     ]
                  },
                  {
                     "id": "q5-opt-2-3-30",
                     "title": "potential negative Impact - Score",
                     "type": "text",
                     "triggerOption": "3 potential negative impacts",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q5-opt-2-3-31",
                     "title": "Describe the first potential negative impact in detail.",
                     "type": "text",
                     "triggerOption": "3 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-3-32",
                     "title": "What is the identified impact?",
                     "type": "text",
                     "triggerOption": "3 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-3-33",
                     "title": "Give a title to the identified impact.",
                     "type": "text",
                     "triggerOption": "3 potential negative impacts",
                     "required": true,
                     "description": "Please keep the impact title concise"
                  },
                  {
                     "id": "q5-opt-2-3-34",
                     "title": "Is this impact clearly material without conducting a materiality assessment?",
                     "type": "text",
                     "triggerOption": "3 potential negative impacts",
                     "required": true,
                     "description": "Selecting yes means that this impact will be automatically material. This is useful for sustainability matters that are very clearly linked to your company's operations. Only use this option when this impact is related to your business's core operations.",
                     "options": [
                        { "id": "opt1", "text": "Yes" },
                        { "id": "opt2", "text": "No" }
                     ]
                  },
                  {
                     "id": "q5-opt-2-3-35",
                     "title": "How do you evaluate the scope of potential negative impacts?",
                     "type": "text",
                     "triggerOption": "3 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-3-36",
                     "title": "What is the scope of the potential negative impact due to Climate change mitigation?",
                     "type": "multiple-choice",
                     "triggerOption": "3 potential negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt2", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-2-3-37",
                     "title": "How do you evaluate the scope of potential negative impacts?",
                     "type": "text",
                     "triggerOption": "3 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-3-38",
                     "title": "What is the scope of the potential negative impact due to Climate change mitigation?",
                     "type": "multiple-choice",
                     "triggerOption": "3 potential negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt2", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-2-3-39",
                     "title": "How do you determine the extent to which these impacts are irreversible or difficult to remediate? ",
                     "type": "text",
                     "triggerOption": "3 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-3-40",
                     "title": "What is the magnitude of the irremediability of your company's potential negative impacts related to Climate change mitigation?",
                     "type": "multiple-choice",
                     "triggerOption": "3 potential negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very easy to remedy" },
                        { "id": "opt2", "text": "Relatively easy to remedy short-term" },
                        { "id": "opt3", "text": "Remediable with effort (time & cost)" },
                        { "id": "opt4", "text": "Very difficult to remedy or long-term" },
                        { "id": "opt5", "text": "Non-remediable/irreversible" }
                     ]
                  },
                  {
                     "id": "q5-opt-2-3-41",
                     "title": "Does the impact relate to human rights?",
                     "type": "text",
                     "triggerOption": "3 potential negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Yes" },
                        { "id": "opt2", "text": "No" }
                     ]
                  },
                  {
                     "id": "q5-opt-2-3-42",
                     "title": "What criteria does your company use to estimate the likelihood and timelines for potential negative impacts related to Climate change mitigation?",
                     "type": "text",
                     "triggerOption": "3 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-3-43",
                     "title": "What criteria does your company use to estimate the likelihood and timelines for potential negative impacts related to Climate change mitigation?",
                     "type": "text",
                     "triggerOption": "3 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-3-44",
                     "title": "What is the potential likelihood of these negative impacts to occur within a given period?",
                     "type": "multiple-choice",
                     "triggerOption": "3 potential negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very unlikely" },
                        { "id": "opt2", "text": "Unlikely" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Likely" },
                        { "id": "opt5", "text": "Highly likely" }
                     ]
                  },
                  {
                     "id": "q5-opt-2-3-45",
                     "title": "potential negative Impact - Score",
                     "type": "text",
                     "triggerOption": "3 potential negative impacts",
                     "required": true,
                     "description": "END"
                  },
               ],
            },
            {
               "id": "q5-opt-3-1",
               "title": "How many actual positive impacts did your company identify?",
               "type": "multiple-choice",
               "required": true,
               "triggerOption": "An actual positive impact",
               "options": [
                  { "id": "opt1", "text": "1 actual positive impacts" },
                  { "id": "opt2", "text": "2 actual positive impacts" },
                  { "id": "opt3", "text": "3 actual positive impacts" },
               ],
               subQuestions: [
                  {
                     "id": "q5-opt-3-1-1",
                     "title": "Describe the first actual positive impact in detail.",
                     "type": "text",
                     "triggerOption": "1 actual positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-3-1-2",
                     "title": "What is the identified impact?",
                     "type": "text",
                     "triggerOption": "1 actual positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-3-1-3",
                     "title": "Give a title to the identified impact.",
                     "type": "text",
                     "triggerOption": "1 actual positive impacts",
                     "required": true,
                     "description": "Please keep the impact title concise"
                  },
                  {
                     "id": "q5-opt-3-1-4",
                     "title": "Is this impact clearly material without conducting a materiality assessment?",
                     "type": "text",
                     "triggerOption": "1 actual positive impacts",
                     "required": true,
                     "description": "Selecting yes means that this impact will be automatically material. This is useful for sustainability matters that are very clearly linked to your company's operations. Only use this option when this impact is related to your business's core operations.",
                     "options": [
                        { "id": "opt1", "text": "Yes" },
                        { "id": "opt2", "text": "No" }
                     ]
                  },
                  {
                     "id": "q5-opt-3-1-5",
                     "title": "How do you evaluate the scope of actual positive impacts?",
                     "type": "text",
                     "triggerOption": "1 actual positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-3-1-6",
                     "title": "What is the scope of the actual positive impact due to Climate change mitigation?",
                     "type": "multiple-choice",
                     "triggerOption": "1 actual positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt2", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-3-1-7",
                     "title": "How do you evaluate the scope of actual positive impacts?",
                     "type": "text",
                     "triggerOption": "1 actual positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-3-1-8",
                     "title": "What is the scope of the actual positive impact due to Climate change mitigation?",
                     "type": "multiple-choice",
                     "triggerOption": "1 actual positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt2", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-3-1-9",
                     "title": "How do you determine the extent to which these impacts are irreversible or difficult to remediate? ",
                     "type": "text",
                     "triggerOption": "1 actual positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-3-1-10",
                     "title": "What is the magnitude of the irremediability of your company's actual positive impacts related to Climate change mitigation?",
                     "type": "multiple-choice",
                     "triggerOption": "1 actual positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very easy to remedy" },
                        { "id": "opt2", "text": "Relatively easy to remedy short-term" },
                        { "id": "opt3", "text": "Remediable with effort (time & cost)" },
                        { "id": "opt4", "text": "Very difficult to remedy or long-term" },
                        { "id": "opt5", "text": "Non-remediable/irreversible" }
                     ]
                  },
                  {
                     "id": "q5-opt-3-1-11",
                     "title": "actual positive Impact - Score",
                     "type": "text",
                     "triggerOption": "1 actual positive impacts",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q5-opt-3-2-1",
                     "title": "Describe the first actual positive impact in detail.",
                     "type": "text",
                     "triggerOption": "2 actual positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-3-2-2",
                     "title": "What is the identified impact?",
                     "type": "text",
                     "triggerOption": "2 actual positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-3-2-3",
                     "title": "Give a title to the identified impact.",
                     "type": "text",
                     "triggerOption": "2 actual positive impacts",
                     "required": true,
                     "description": "Please keep the impact title concise"
                  },
                  {
                     "id": "q5-opt-3-2-4",
                     "title": "Is this impact clearly material without conducting a materiality assessment?",
                     "type": "text",
                     "triggerOption": "2 actual positive impacts",
                     "required": true,
                     "description": "Selecting yes means that this impact will be automatically material. This is useful for sustainability matters that are very clearly linked to your company's operations. Only use this option when this impact is related to your business's core operations.",
                     "options": [
                        { "id": "opt1", "text": "Yes" },
                        { "id": "opt2", "text": "No" }
                     ]
                  },
                  {
                     "id": "q5-opt-3-2-5",
                     "title": "How do you evaluate the scope of actual positive impacts?",
                     "type": "text",
                     "triggerOption": "2 actual positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-3-2-6",
                     "title": "What is the scope of the actual positive impact due to Climate change mitigation?",
                     "type": "multiple-choice",
                     "triggerOption": "2 actual positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt2", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-3-2-7",
                     "title": "How do you evaluate the scope of actual positive impacts?",
                     "type": "text",
                     "triggerOption": "2 actual positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-3-2-8",
                     "title": "What is the scope of the actual positive impact due to Climate change mitigation?",
                     "type": "multiple-choice",
                     "triggerOption": "2 actual positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt2", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-3-2-9",
                     "title": "How do you determine the extent to which these impacts are irreversible or difficult to remediate? ",
                     "type": "text",
                     "triggerOption": "2 actual positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-3-2-10",
                     "title": "What is the magnitude of the irremediability of your company's actual positive impacts related to Climate change mitigation?",
                     "type": "multiple-choice",
                     "triggerOption": "2 actual positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very easy to remedy" },
                        { "id": "opt2", "text": "Relatively easy to remedy short-term" },
                        { "id": "opt3", "text": "Remediable with effort (time & cost)" },
                        { "id": "opt4", "text": "Very difficult to remedy or long-term" },
                        { "id": "opt5", "text": "Non-remediable/irreversible" }
                     ]
                  },
                  {
                     "id": "q5-opt-3-2-11",
                     "title": "actual positive Impact - Score",
                     "type": "text",
                     "triggerOption": "2 actual positive impacts",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q5-opt-3-2-12",
                     "title": "Describe the Second actual positive impact in detail.",
                     "type": "text",
                     "triggerOption": "2 actual positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-3-2-13",
                     "title": "What is the identified impact?",
                     "type": "text",
                     "triggerOption": "2 actual positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-3-2-14",
                     "title": "Give a title to the identified impact.",
                     "type": "text",
                     "triggerOption": "2 actual positive impacts",
                     "required": true,
                     "description": "Please keep the impact title concise"
                  },
                  {
                     "id": "q5-opt-3-2-15",
                     "title": "Is this impact clearly material without conducting a materiality assessment?",
                     "type": "text",
                     "triggerOption": "2 actual positive impacts",
                     "required": true,
                     "description": "Selecting yes means that this impact will be automatically material. This is useful for sustainability matters that are very clearly linked to your company's operations. Only use this option when this impact is related to your business's core operations.",
                     "options": [
                        { "id": "opt1", "text": "Yes" },
                        { "id": "opt2", "text": "No" }
                     ]
                  },
                  {
                     "id": "q5-opt-3-2-16",
                     "title": "How do you evaluate the scope of actual positive impacts?",
                     "type": "text",
                     "triggerOption": "2 actual positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-3-2-17",
                     "title": "What is the scope of the actual positive impact due to Climate change mitigation?",
                     "type": "multiple-choice",
                     "triggerOption": "2 actual positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt2", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-3-2-18",
                     "title": "How do you evaluate the scope of actual positive impacts?",
                     "type": "text",
                     "triggerOption": "2 actual positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-3-2-19",
                     "title": "What is the scope of the actual positive impact due to Climate change mitigation?",
                     "type": "multiple-choice",
                     "triggerOption": "2 actual positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt2", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-3-2-20",
                     "title": "How do you determine the extent to which these impacts are irreversible or difficult to remediate? ",
                     "type": "text",
                     "triggerOption": "2 actual positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-3-2-21",
                     "title": "What is the magnitude of the irremediability of your company's actual positive impacts related to Climate change mitigation?",
                     "type": "multiple-choice",
                     "triggerOption": "2 actual positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very easy to remedy" },
                        { "id": "opt2", "text": "Relatively easy to remedy short-term" },
                        { "id": "opt3", "text": "Remediable with effort (time & cost)" },
                        { "id": "opt4", "text": "Very difficult to remedy or long-term" },
                        { "id": "opt5", "text": "Non-remediable/irreversible" }
                     ]
                  },
                  {
                     "id": "q5-opt-3-2-22",
                     "title": "actual positive Impact - Score",
                     "type": "text",
                     "triggerOption": "2 actual positive impacts",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q5-opt-3-3-1",
                     "title": "Describe the first actual positive impact in detail.",
                     "type": "text",
                     "triggerOption": "3 actual positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-3-3-2",
                     "title": "What is the identified impact?",
                     "type": "text",
                     "triggerOption": "3 actual positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-3-3-3",
                     "title": "Give a title to the identified impact.",
                     "type": "text",
                     "triggerOption": "3 actual positive impacts",
                     "required": true,
                     "description": "Please keep the impact title concise"
                  },
                  {
                     "id": "q5-opt-3-3-4",
                     "title": "Is this impact clearly material without conducting a materiality assessment?",
                     "type": "text",
                     "triggerOption": "3 actual positive impacts",
                     "required": true,
                     "description": "Selecting yes means that this impact will be automatically material. This is useful for sustainability matters that are very clearly linked to your company's operations. Only use this option when this impact is related to your business's core operations.",
                     "options": [
                        { "id": "opt1", "text": "Yes" },
                        { "id": "opt3", "text": "No" }
                     ]
                  },
                  {
                     "id": "q5-opt-3-3-5",
                     "title": "How do you evaluate the scope of actual positive impacts?",
                     "type": "text",
                     "triggerOption": "3 actual positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-3-3-6",
                     "title": "What is the scope of the actual positive impact due to Climate change mitigation?",
                     "type": "multiple-choice",
                     "triggerOption": "3 actual positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt3", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-3-3-7",
                     "title": "How do you evaluate the scope of actual positive impacts?",
                     "type": "text",
                     "triggerOption": "3 actual positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-3-3-8",
                     "title": "What is the scope of the actual positive impact due to Climate change mitigation?",
                     "type": "multiple-choice",
                     "triggerOption": "3 actual positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt3", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-3-3-9",
                     "title": "How do you determine the extent to which these impacts are irreversible or difficult to remediate? ",
                     "type": "text",
                     "triggerOption": "3 actual positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-3-3-10",
                     "title": "What is the magnitude of the irremediability of your company's actual positive impacts related to Climate change mitigation?",
                     "type": "multiple-choice",
                     "triggerOption": "3 actual positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very easy to remedy" },
                        { "id": "opt3", "text": "Relatively easy to remedy short-term" },
                        { "id": "opt3", "text": "Remediable with effort (time & cost)" },
                        { "id": "opt4", "text": "Very difficult to remedy or long-term" },
                        { "id": "opt5", "text": "Non-remediable/irreversible" }
                     ]
                  },
                  {
                     "id": "q5-opt-3-3-11",
                     "title": "actual positive Impact - Score",
                     "type": "text",
                     "triggerOption": "3 actual positive impacts",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q5-opt-3-3-12",
                     "title": "Describe the second actual positive impact in detail.",
                     "type": "text",
                     "triggerOption": "3 actual positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-3-3-13",
                     "title": "What is the identified impact?",
                     "type": "text",
                     "triggerOption": "3 actual positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-3-3-14",
                     "title": "Give a title to the identified impact.",
                     "type": "text",
                     "triggerOption": "3 actual positive impacts",
                     "required": true,
                     "description": "Please keep the impact title concise"
                  },
                  {
                     "id": "q5-opt-3-3-15",
                     "title": "Is this impact clearly material without conducting a materiality assessment?",
                     "type": "text",
                     "triggerOption": "3 actual positive impacts",
                     "required": true,
                     "description": "Selecting yes means that this impact will be automatically material. This is useful for sustainability matters that are very clearly linked to your company's operations. Only use this option when this impact is related to your business's core operations.",
                     "options": [
                        { "id": "opt1", "text": "Yes" },
                        { "id": "opt3", "text": "No" }
                     ]
                  },
                  {
                     "id": "q5-opt-3-3-16",
                     "title": "How do you evaluate the scope of actual positive impacts?",
                     "type": "text",
                     "triggerOption": "3 actual positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-3-3-17",
                     "title": "What is the scope of the actual positive impact due to Climate change mitigation?",
                     "type": "multiple-choice",
                     "triggerOption": "3 actual positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt3", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-3-3-18",
                     "title": "How do you evaluate the scope of actual positive impacts?",
                     "type": "text",
                     "triggerOption": "3 actual positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-3-3-19",
                     "title": "What is the scope of the actual positive impact due to Climate change mitigation?",
                     "type": "multiple-choice",
                     "triggerOption": "3 actual positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt3", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-3-3-20",
                     "title": "How do you determine the extent to which these impacts are irreversible or difficult to remediate? ",
                     "type": "text",
                     "triggerOption": "3 actual positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-3-3-21",
                     "title": "What is the magnitude of the irremediability of your company's actual positive impacts related to Climate change mitigation?",
                     "type": "multiple-choice",
                     "triggerOption": "3 actual positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very easy to remedy" },
                        { "id": "opt3", "text": "Relatively easy to remedy short-term" },
                        { "id": "opt3", "text": "Remediable with effort (time & cost)" },
                        { "id": "opt4", "text": "Very difficult to remedy or long-term" },
                        { "id": "opt5", "text": "Non-remediable/irreversible" }
                     ]
                  },
                  {
                     "id": "q5-opt-3-3-22",
                     "title": "actual positive Impact - Score",
                     "type": "text",
                     "triggerOption": "3 actual positive impacts",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q5-opt-3-3-23",
                     "title": "Describe the third actual positive impact in detail.",
                     "type": "text",
                     "triggerOption": "3 actual positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-3-3-24",
                     "title": "What is the identified impact?",
                     "type": "text",
                     "triggerOption": "3 actual positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-3-3-25",
                     "title": "Give a title to the identified impact.",
                     "type": "text",
                     "triggerOption": "3 actual positive impacts",
                     "required": true,
                     "description": "Please keep the impact title concise"
                  },
                  {
                     "id": "q5-opt-3-3-26",
                     "title": "Is this impact clearly material without conducting a materiality assessment?",
                     "type": "text",
                     "triggerOption": "3 actual positive impacts",
                     "required": true,
                     "description": "Selecting yes means that this impact will be automatically material. This is useful for sustainability matters that are very clearly linked to your company's operations. Only use this option when this impact is related to your business's core operations.",
                     "options": [
                        { "id": "opt1", "text": "Yes" },
                        { "id": "opt3", "text": "No" }
                     ]
                  },
                  {
                     "id": "q5-opt-3-3-27",
                     "title": "How do you evaluate the scope of actual positive impacts?",
                     "type": "text",
                     "triggerOption": "3 actual positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-3-3-28",
                     "title": "What is the scope of the actual positive impact due to Climate change mitigation?",
                     "type": "multiple-choice",
                     "triggerOption": "3 actual positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt3", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-3-3-29",
                     "title": "How do you evaluate the scope of actual positive impacts?",
                     "type": "text",
                     "triggerOption": "3 actual positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-3-3-30",
                     "title": "What is the scope of the actual positive impact due to Climate change mitigation?",
                     "type": "multiple-choice",
                     "triggerOption": "3 actual positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt3", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-3-3-31",
                     "title": "How do you determine the extent to which these impacts are irreversible or difficult to remediate? ",
                     "type": "text",
                     "triggerOption": "3 actual positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-3-3-32",
                     "title": "What is the magnitude of the irremediability of your company's actual positive impacts related to Climate change mitigation?",
                     "type": "multiple-choice",
                     "triggerOption": "3 actual positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very easy to remedy" },
                        { "id": "opt3", "text": "Relatively easy to remedy short-term" },
                        { "id": "opt3", "text": "Remediable with effort (time & cost)" },
                        { "id": "opt4", "text": "Very difficult to remedy or long-term" },
                        { "id": "opt5", "text": "Non-remediable/irreversible" }
                     ]
                  },
                  {
                     "id": "q5-opt-3-3-33",
                     "title": "actual positive Impact - Score",
                     "type": "text",
                     "triggerOption": "3 actual positive impacts",
                     "required": true,
                     "description": "END"
                  },
               ],
            },
            {
               "id": "q5-opt-4-1",
               "title": "How many potential positive impacts did your company identify?",
               "type": "multiple-choice",
               "required": true,
               "triggerOption": "An potential positive impact",
               "options": [
                  { "id": "opt1", "text": "1 potential positive impacts" },
                  { "id": "opt2", "text": "2 potential positive impacts" },
                  { "id": "opt3", "text": "3 potential positive impacts" },
               ],
               subQuestions: [
                  {
                     "id": "q5-opt-4-1-1",
                     "title": "Describe the first potential positive impact in detail.",
                     "type": "text",
                     "triggerOption": "1 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-1-2",
                     "title": "What is the identified impact?",
                     "type": "text",
                     "triggerOption": "1 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-1-3",
                     "title": "Give a title to the identified impact.",
                     "type": "text",
                     "triggerOption": "1 potential positive impacts",
                     "required": true,
                     "description": "Please keep the impact title concise"
                  },
                  {
                     "id": "q5-opt-4-1-4",
                     "title": "Is this impact clearly material without conducting a materiality assessment?",
                     "type": "text",
                     "triggerOption": "1 potential positive impacts",
                     "required": true,
                     "description": "Selecting yes means that this impact will be automatically material. This is useful for sustainability matters that are very clearly linked to your company's operations. Only use this option when this impact is related to your business's core operations.",
                     "options": [
                        { "id": "opt1", "text": "Yes" },
                        { "id": "opt2", "text": "No" }
                     ]
                  },
                  {
                     "id": "q5-opt-4-1-5",
                     "title": "How do you evaluate the scope of potential positive impacts?",
                     "type": "text",
                     "triggerOption": "1 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-1-6",
                     "title": "What is the scope of the potential positive impact due to Climate change mitigation?",
                     "type": "multiple-choice",
                     "triggerOption": "1 potential positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt2", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-4-1-7",
                     "title": "How do you evaluate the scope of potential positive impacts?",
                     "type": "text",
                     "triggerOption": "1 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-1-8",
                     "title": "What is the scope of the potential positive impact due to Climate change mitigation?",
                     "type": "multiple-choice",
                     "triggerOption": "1 potential positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt2", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-4-1-9",
                     "title": "How do you determine the extent to which these impacts are irreversible or difficult to remediate? ",
                     "type": "text",
                     "triggerOption": "1 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-1-10",
                     "title": "What is the magnitude of the irremediability of your company's potential positive impacts related to Climate change mitigation?",
                     "type": "multiple-choice",
                     "triggerOption": "1 potential positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very easy to remedy" },
                        { "id": "opt2", "text": "Relatively easy to remedy short-term" },
                        { "id": "opt3", "text": "Remediable with effort (time & cost)" },
                        { "id": "opt4", "text": "Very difficult to remedy or long-term" },
                        { "id": "opt5", "text": "Non-remediable/irreversible" }
                     ]
                  },
                  {
                     "id": "q5-opt-4-1-11",
                     "title": "Does the impact relate to human rights?",
                     "type": "text",
                     "triggerOption": "1 potential positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Yes" },
                        { "id": "opt2", "text": "No" }
                     ]
                  },
                  {
                     "id": "q5-opt-4-1-12",
                     "title": "What criteria does your company use to estimate the likelihood and timelines for potential positive impacts related to Climate change mitigation?",
                     "type": "text",
                     "triggerOption": "1 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-1-13",
                     "title": "What criteria does your company use to estimate the likelihood and timelines for potential positive impacts related to Climate change mitigation?",
                     "type": "text",
                     "triggerOption": "1 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-1-14",
                     "title": "What is the potential likelihood of these positive impacts to occur within a given period?",
                     "type": "multiple-choice",
                     "triggerOption": "1 potential positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very unlikely" },
                        { "id": "opt2", "text": "Unlikely" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Likely" },
                        { "id": "opt5", "text": "Highly likely" }
                     ]
                  },
                  {
                     "id": "q5-opt-4-1-15",
                     "title": "potential positive Impact - Score",
                     "type": "text",
                     "triggerOption": "1 potential positive impacts",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q5-opt-4-2-1",
                     "title": "Describe the first potential positive impact in detail.",
                     "type": "text",
                     "triggerOption": "2 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-2-2",
                     "title": "What is the identified impact?",
                     "type": "text",
                     "triggerOption": "2 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-2-3",
                     "title": "Give a title to the identified impact.",
                     "type": "text",
                     "triggerOption": "2 potential positive impacts",
                     "required": true,
                     "description": "Please keep the impact title concise"
                  },
                  {
                     "id": "q5-opt-4-2-4",
                     "title": "Is this impact clearly material without conducting a materiality assessment?",
                     "type": "text",
                     "triggerOption": "2 potential positive impacts",
                     "required": true,
                     "description": "Selecting yes means that this impact will be automatically material. This is useful for sustainability matters that are very clearly linked to your company's operations. Only use this option when this impact is related to your business's core operations.",
                     "options": [
                        { "id": "opt1", "text": "Yes" },
                        { "id": "opt2", "text": "No" }
                     ]
                  },
                  {
                     "id": "q5-opt-4-2-5",
                     "title": "How do you evaluate the scope of potential positive impacts?",
                     "type": "text",
                     "triggerOption": "2 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-2-6",
                     "title": "What is the scope of the potential positive impact due to Climate change mitigation?",
                     "type": "multiple-choice",
                     "triggerOption": "2 potential positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt2", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-4-2-7",
                     "title": "How do you evaluate the scope of potential positive impacts?",
                     "type": "text",
                     "triggerOption": "2 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-2-8",
                     "title": "What is the scope of the potential positive impact due to Climate change mitigation?",
                     "type": "multiple-choice",
                     "triggerOption": "2 potential positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt2", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-4-2-9",
                     "title": "How do you determine the extent to which these impacts are irreversible or difficult to remediate? ",
                     "type": "text",
                     "triggerOption": "2 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-2-10",
                     "title": "What is the magnitude of the irremediability of your company's potential positive impacts related to Climate change mitigation?",
                     "type": "multiple-choice",
                     "triggerOption": "2 potential positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very easy to remedy" },
                        { "id": "opt2", "text": "Relatively easy to remedy short-term" },
                        { "id": "opt3", "text": "Remediable with effort (time & cost)" },
                        { "id": "opt4", "text": "Very difficult to remedy or long-term" },
                        { "id": "opt5", "text": "Non-remediable/irreversible" }
                     ]
                  },
                  {
                     "id": "q5-opt-4-2-11",
                     "title": "Does the impact relate to human rights?",
                     "type": "text",
                     "triggerOption": "2 potential positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Yes" },
                        { "id": "opt2", "text": "No" }
                     ]
                  },
                  {
                     "id": "q5-opt-4-2-12",
                     "title": "What criteria does your company use to estimate the likelihood and timelines for potential positive impacts related to Climate change mitigation?",
                     "type": "text",
                     "triggerOption": "2 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-2-13",
                     "title": "What criteria does your company use to estimate the likelihood and timelines for potential positive impacts related to Climate change mitigation?",
                     "type": "text",
                     "triggerOption": "2 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-2-14",
                     "title": "What is the potential likelihood of these positive impacts to occur within a given period?",
                     "type": "multiple-choice",
                     "triggerOption": "2 potential positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very unlikely" },
                        { "id": "opt2", "text": "Unlikely" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Likely" },
                        { "id": "opt5", "text": "Highly likely" }
                     ]
                  },
                  {
                     "id": "q5-opt-4-2-15",
                     "title": "potential positive Impact - Score",
                     "type": "text",
                     "triggerOption": "2 potential positive impacts",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q5-opt-4-2-16",
                     "title": "Describe the first potential positive impact in detail.",
                     "type": "text",
                     "triggerOption": "2 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-2-17",
                     "title": "What is the identified impact?",
                     "type": "text",
                     "triggerOption": "2 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-2-18",
                     "title": "Give a title to the identified impact.",
                     "type": "text",
                     "triggerOption": "2 potential positive impacts",
                     "required": true,
                     "description": "Please keep the impact title concise"
                  },
                  {
                     "id": "q5-opt-4-2-19",
                     "title": "Is this impact clearly material without conducting a materiality assessment?",
                     "type": "text",
                     "triggerOption": "2 potential positive impacts",
                     "required": true,
                     "description": "Selecting yes means that this impact will be automatically material. This is useful for sustainability matters that are very clearly linked to your company's operations. Only use this option when this impact is related to your business's core operations.",
                     "options": [
                        { "id": "opt1", "text": "Yes" },
                        { "id": "opt2", "text": "No" }
                     ]
                  },
                  {
                     "id": "q5-opt-4-2-20",
                     "title": "How do you evaluate the scope of potential positive impacts?",
                     "type": "text",
                     "triggerOption": "2 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-2-21",
                     "title": "What is the scope of the potential positive impact due to Climate change mitigation?",
                     "type": "multiple-choice",
                     "triggerOption": "2 potential positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt2", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-4-2-22",
                     "title": "How do you evaluate the scope of potential positive impacts?",
                     "type": "text",
                     "triggerOption": "2 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-2-23",
                     "title": "What is the scope of the potential positive impact due to Climate change mitigation?",
                     "type": "multiple-choice",
                     "triggerOption": "2 potential positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt2", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-4-2-24",
                     "title": "How do you determine the extent to which these impacts are irreversible or difficult to remediate? ",
                     "type": "text",
                     "triggerOption": "2 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-2-25",
                     "title": "What is the magnitude of the irremediability of your company's potential positive impacts related to Climate change mitigation?",
                     "type": "multiple-choice",
                     "triggerOption": "2 potential positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very easy to remedy" },
                        { "id": "opt2", "text": "Relatively easy to remedy short-term" },
                        { "id": "opt3", "text": "Remediable with effort (time & cost)" },
                        { "id": "opt4", "text": "Very difficult to remedy or long-term" },
                        { "id": "opt5", "text": "Non-remediable/irreversible" }
                     ]
                  },
                  {
                     "id": "q5-opt-4-2-26",
                     "title": "Does the impact relate to human rights?",
                     "type": "text",
                     "triggerOption": "2 potential positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Yes" },
                        { "id": "opt2", "text": "No" }
                     ]
                  },
                  {
                     "id": "q5-opt-4-2-27",
                     "title": "What criteria does your company use to estimate the likelihood and timelines for potential positive impacts related to Climate change mitigation?",
                     "type": "text",
                     "triggerOption": "2 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-2-28",
                     "title": "What criteria does your company use to estimate the likelihood and timelines for potential positive impacts related to Climate change mitigation?",
                     "type": "text",
                     "triggerOption": "2 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-2-29",
                     "title": "What is the potential likelihood of these positive impacts to occur within a given period?",
                     "type": "multiple-choice",
                     "triggerOption": "2 potential positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very unlikely" },
                        { "id": "opt2", "text": "Unlikely" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Likely" },
                        { "id": "opt5", "text": "Highly likely" }
                     ]
                  },
                  {
                     "id": "q5-opt-4-2-30",
                     "title": "potential positive Impact - Score",
                     "type": "text",
                     "triggerOption": "2 potential positive impacts",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q5-opt-4-3-1",
                     "title": "Describe the first potential positive impact in detail.",
                     "type": "text",
                     "triggerOption": "3 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-3-2",
                     "title": "What is the identified impact?",
                     "type": "text",
                     "triggerOption": "3 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-3-3",
                     "title": "Give a title to the identified impact.",
                     "type": "text",
                     "triggerOption": "3 potential positive impacts",
                     "required": true,
                     "description": "Please keep the impact title concise"
                  },
                  {
                     "id": "q5-opt-4-3-4",
                     "title": "Is this impact clearly material without conducting a materiality assessment?",
                     "type": "text",
                     "triggerOption": "3 potential positive impacts",
                     "required": true,
                     "description": "Selecting yes means that this impact will be automatically material. This is useful for sustainability matters that are very clearly linked to your company's operations. Only use this option when this impact is related to your business's core operations.",
                     "options": [
                        { "id": "opt1", "text": "Yes" },
                        { "id": "opt2", "text": "No" }
                     ]
                  },
                  {
                     "id": "q5-opt-4-3-5",
                     "title": "How do you evaluate the scope of potential positive impacts?",
                     "type": "text",
                     "triggerOption": "3 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-3-6",
                     "title": "What is the scope of the potential positive impact due to Climate change mitigation?",
                     "type": "multiple-choice",
                     "triggerOption": "3 potential positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt2", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-4-3-7",
                     "title": "How do you evaluate the scope of potential positive impacts?",
                     "type": "text",
                     "triggerOption": "3 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-3-8",
                     "title": "What is the scope of the potential positive impact due to Climate change mitigation?",
                     "type": "multiple-choice",
                     "triggerOption": "3 potential positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt2", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-4-3-9",
                     "title": "How do you determine the extent to which these impacts are irreversible or difficult to remediate? ",
                     "type": "text",
                     "triggerOption": "3 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-3-10",
                     "title": "What is the magnitude of the irremediability of your company's potential positive impacts related to Climate change mitigation?",
                     "type": "multiple-choice",
                     "triggerOption": "3 potential positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very easy to remedy" },
                        { "id": "opt2", "text": "Relatively easy to remedy short-term" },
                        { "id": "opt3", "text": "Remediable with effort (time & cost)" },
                        { "id": "opt4", "text": "Very difficult to remedy or long-term" },
                        { "id": "opt5", "text": "Non-remediable/irreversible" }
                     ]
                  },
                  {
                     "id": "q5-opt-4-3-11",
                     "title": "Does the impact relate to human rights?",
                     "type": "text",
                     "triggerOption": "3 potential positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Yes" },
                        { "id": "opt2", "text": "No" }
                     ]
                  },
                  {
                     "id": "q5-opt-4-3-12",
                     "title": "What criteria does your company use to estimate the likelihood and timelines for potential positive impacts related to Climate change mitigation?",
                     "type": "text",
                     "triggerOption": "3 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-3-13",
                     "title": "What criteria does your company use to estimate the likelihood and timelines for potential positive impacts related to Climate change mitigation?",
                     "type": "text",
                     "triggerOption": "3 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-3-14",
                     "title": "What is the potential likelihood of these positive impacts to occur within a given period?",
                     "type": "multiple-choice",
                     "triggerOption": "3 potential positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very unlikely" },
                        { "id": "opt2", "text": "Unlikely" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Likely" },
                        { "id": "opt5", "text": "Highly likely" }
                     ]
                  },
                  {
                     "id": "q5-opt-4-3-15",
                     "title": "potential positive Impact - Score",
                     "type": "text",
                     "triggerOption": "3 potential positive impacts",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q5-opt-4-3-16",
                     "title": "Describe the first potential positive impact in detail.",
                     "type": "text",
                     "triggerOption": "3 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-3-17",
                     "title": "What is the identified impact?",
                     "type": "text",
                     "triggerOption": "3 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-3-18",
                     "title": "Give a title to the identified impact.",
                     "type": "text",
                     "triggerOption": "3 potential positive impacts",
                     "required": true,
                     "description": "Please keep the impact title concise"
                  },
                  {
                     "id": "q5-opt-4-3-19",
                     "title": "Is this impact clearly material without conducting a materiality assessment?",
                     "type": "text",
                     "triggerOption": "3 potential positive impacts",
                     "required": true,
                     "description": "Selecting yes means that this impact will be automatically material. This is useful for sustainability matters that are very clearly linked to your company's operations. Only use this option when this impact is related to your business's core operations.",
                     "options": [
                        { "id": "opt1", "text": "Yes" },
                        { "id": "opt2", "text": "No" }
                     ]
                  },
                  {
                     "id": "q5-opt-4-3-20",
                     "title": "How do you evaluate the scope of potential positive impacts?",
                     "type": "text",
                     "triggerOption": "3 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-3-21",
                     "title": "What is the scope of the potential positive impact due to Climate change mitigation?",
                     "type": "multiple-choice",
                     "triggerOption": "3 potential positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt2", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-4-3-22",
                     "title": "How do you evaluate the scope of potential positive impacts?",
                     "type": "text",
                     "triggerOption": "3 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-3-23",
                     "title": "What is the scope of the potential positive impact due to Climate change mitigation?",
                     "type": "multiple-choice",
                     "triggerOption": "3 potential positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt2", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-4-3-24",
                     "title": "How do you determine the extent to which these impacts are irreversible or difficult to remediate? ",
                     "type": "text",
                     "triggerOption": "3 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-3-25",
                     "title": "What is the magnitude of the irremediability of your company's potential positive impacts related to Climate change mitigation?",
                     "type": "multiple-choice",
                     "triggerOption": "3 potential positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very easy to remedy" },
                        { "id": "opt2", "text": "Relatively easy to remedy short-term" },
                        { "id": "opt3", "text": "Remediable with effort (time & cost)" },
                        { "id": "opt4", "text": "Very difficult to remedy or long-term" },
                        { "id": "opt5", "text": "Non-remediable/irreversible" }
                     ]
                  },
                  {
                     "id": "q5-opt-4-3-26",
                     "title": "Does the impact relate to human rights?",
                     "type": "text",
                     "triggerOption": "3 potential positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Yes" },
                        { "id": "opt2", "text": "No" }
                     ]
                  },
                  {
                     "id": "q5-opt-4-3-27",
                     "title": "What criteria does your company use to estimate the likelihood and timelines for potential positive impacts related to Climate change mitigation?",
                     "type": "text",
                     "triggerOption": "3 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-3-28",
                     "title": "What criteria does your company use to estimate the likelihood and timelines for potential positive impacts related to Climate change mitigation?",
                     "type": "text",
                     "triggerOption": "3 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-3-29",
                     "title": "What is the potential likelihood of these positive impacts to occur within a given period?",
                     "type": "multiple-choice",
                     "triggerOption": "3 potential positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very unlikely" },
                        { "id": "opt2", "text": "Unlikely" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Likely" },
                        { "id": "opt5", "text": "Highly likely" }
                     ]
                  },
                  {
                     "id": "q5-opt-4-3-30",
                     "title": "potential positive Impact - Score",
                     "type": "text",
                     "triggerOption": "3 potential positive impacts",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q5-opt-4-3-31",
                     "title": "Describe the first potential positive impact in detail.",
                     "type": "text",
                     "triggerOption": "3 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-3-32",
                     "title": "What is the identified impact?",
                     "type": "text",
                     "triggerOption": "3 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-3-33",
                     "title": "Give a title to the identified impact.",
                     "type": "text",
                     "triggerOption": "3 potential positive impacts",
                     "required": true,
                     "description": "Please keep the impact title concise"
                  },
                  {
                     "id": "q5-opt-4-3-34",
                     "title": "Is this impact clearly material without conducting a materiality assessment?",
                     "type": "text",
                     "triggerOption": "3 potential positive impacts",
                     "required": true,
                     "description": "Selecting yes means that this impact will be automatically material. This is useful for sustainability matters that are very clearly linked to your company's operations. Only use this option when this impact is related to your business's core operations.",
                     "options": [
                        { "id": "opt1", "text": "Yes" },
                        { "id": "opt2", "text": "No" }
                     ]
                  },
                  {
                     "id": "q5-opt-4-3-35",
                     "title": "How do you evaluate the scope of potential positive impacts?",
                     "type": "text",
                     "triggerOption": "3 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-3-36",
                     "title": "What is the scope of the potential positive impact due to Climate change mitigation?",
                     "type": "multiple-choice",
                     "triggerOption": "3 potential positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt2", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-4-3-37",
                     "title": "How do you evaluate the scope of potential positive impacts?",
                     "type": "text",
                     "triggerOption": "3 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-3-38",
                     "title": "What is the scope of the potential positive impact due to Climate change mitigation?",
                     "type": "multiple-choice",
                     "triggerOption": "3 potential positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt2", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-4-3-39",
                     "title": "How do you determine the extent to which these impacts are irreversible or difficult to remediate? ",
                     "type": "text",
                     "triggerOption": "3 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-3-40",
                     "title": "What is the magnitude of the irremediability of your company's potential positive impacts related to Climate change mitigation?",
                     "type": "multiple-choice",
                     "triggerOption": "3 potential positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very easy to remedy" },
                        { "id": "opt2", "text": "Relatively easy to remedy short-term" },
                        { "id": "opt3", "text": "Remediable with effort (time & cost)" },
                        { "id": "opt4", "text": "Very difficult to remedy or long-term" },
                        { "id": "opt5", "text": "Non-remediable/irreversible" }
                     ]
                  },
                  {
                     "id": "q5-opt-4-3-41",
                     "title": "Does the impact relate to human rights?",
                     "type": "text",
                     "triggerOption": "3 potential positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Yes" },
                        { "id": "opt2", "text": "No" }
                     ]
                  },
                  {
                     "id": "q5-opt-4-3-42",
                     "title": "What criteria does your company use to estimate the likelihood and timelines for potential positive impacts related to Climate change mitigation?",
                     "type": "text",
                     "triggerOption": "3 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-3-43",
                     "title": "What criteria does your company use to estimate the likelihood and timelines for potential positive impacts related to Climate change mitigation?",
                     "type": "text",
                     "triggerOption": "3 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-3-44",
                     "title": "What is the potential likelihood of these positive impacts to occur within a given period?",
                     "type": "multiple-choice",
                     "triggerOption": "3 potential positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very unlikely" },
                        { "id": "opt2", "text": "Unlikely" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Likely" },
                        { "id": "opt5", "text": "Highly likely" }
                     ]
                  },
                  {
                     "id": "q5-opt-4-3-45",
                     "title": "potential positive Impact - Score",
                     "type": "text",
                     "triggerOption": "3 potential positive impacts",
                     "required": true,
                     "description": "END"
                  },
               ],
            },
         ],
      },
      {
         "id": "q6",
         "title": "Do you foresee financial risks in the indicated periods related to Climate change mitigation?",
         "type": "multiple-choice",
         "required": true,
         "options": [
            { "id": "opt1", "text": "Yes: in short-term (<1 year)" },
            { "id": "opt2", "text": "Yes: in mid-term (1-5 years)" },
            { "id": "opt3", "text": "Yes: in long-term (>5 years)" },
            { "id": "opt4", "text": "No" }
         ],
         subQuestions: [
            {
               "id": "q6-opt-1-1",
               "title": "How many short-term financial risks have you identified?",
               "type": "multiple-choice",
               "required": true,
               "triggerOption": "Yes: in short-term (<1 year)",
               "options": [
                  { "id": "opt1", "text": "1 short-term risk" },
                  { "id": "opt2", "text": "2 short-term risk" },
                  { "id": "opt3", "text": "3 short-term risk" },
               ],
               subQuestions: [
                  {
                     "id": "q6-opt-1-1-1",
                     "title": "Describe the first short-term financial risk in detail.",
                     "type": "text",
                     "triggerOption": "1 short-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-1-1-2",
                     "title": "What is the threshold chosen by your financial experts of assessing the materiality of short-term financial risks?",
                     "type": "text",
                     "triggerOption": "1 short-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-1-1-3",
                     "title": "How do you assess the likelihood of this short-term financial risk realizing within the next year?",
                     "type": "text",
                     "triggerOption": "1 short-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-1-1-4",
                     "title": "What is the short-term financial risk relation in Climate change mitigation?",
                     "type": "text",
                     "triggerOption": "1 short-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-1-1-5",
                     "title": "Give a title to the financial risk. ",
                     "type": "text",
                     "triggerOption": "1 short-term risk",
                     "required": true,
                     "description": "Please keep the risk title concise"
                  },
                  {
                     "id": "q6-opt-1-1-6",
                     "title": "Based on the chosen financial threshold, what is the magnitude of the short-term risk?",
                     "type": "multiple-choice",
                     "triggerOption": "1 short-term risk",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Insignificant" },
                        { "id": "opt2", "text": "Negligible" },
                        { "id": "opt3", "text": "Moderate" },
                        { "id": "opt4", "text": "Externsive" },
                        { "id": "opt5", "text": "Significant" }
                     ]
                  },
                  {
                     "id": "q6-opt-1-1-7",
                     "title": "What is the potential likelihood of these short-term financial risk realizing in the next two to five years?",
                     "type": "multiple-choice",
                     "triggerOption": "1 short-term risk",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very low" },
                        { "id": "opt2", "text": "Low" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "High" },
                        { "id": "opt5", "text": "Very High" }
                     ]
                  },
                  {
                     "id": "q6-opt-1-1-8",
                     "title": "Short Term Financial Risk – Score",
                     "type": "text",
                     "triggerOption": "1 short-term risk",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q6-opt-1-2-1",
                     "title": "Describe the first short-term financial risk in detail.",
                     "type": "text",
                     "triggerOption": "2 short-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-1-2-2",
                     "title": "What is the threshold chosen by your financial experts of assessing the materiality of short-term financial risks?",
                     "type": "text",
                     "triggerOption": "2 short-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-1-2-3",
                     "title": "How do you assess the likelihood of this short-term financial risk realizing within the next year?",
                     "type": "text",
                     "triggerOption": "2 short-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-1-2-4",
                     "title": "What is the short-term financial risk relation in Climate change mitigation?",
                     "type": "text",
                     "triggerOption": "2 short-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-1-2-5",
                     "title": "Give a title to the financial risk. ",
                     "type": "text",
                     "triggerOption": "2 short-term risk",
                     "required": true,
                     "description": "Please keep the risk title concise"
                  },
                  {
                     "id": "q6-opt-1-2-6",
                     "title": "Based on the chosen financial threshold, what is the magnitude of the short-term risk?",
                     "type": "multiple-choice",
                     "triggerOption": "2 short-term risk",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Insignificant" },
                        { "id": "opt2", "text": "Negligible" },
                        { "id": "opt3", "text": "Moderate" },
                        { "id": "opt4", "text": "Externsive" },
                        { "id": "opt5", "text": "Significant" }
                     ]
                  },
                  {
                     "id": "q6-opt-1-2-7",
                     "title": "What is the potential likelihood of these short-term financial risk realizing in the next two to five years?",
                     "type": "multiple-choice",
                     "triggerOption": "2 short-term risk",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very low" },
                        { "id": "opt2", "text": "Low" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "High" },
                        { "id": "opt5", "text": "Very High" }
                     ]
                  },
                  {
                     "id": "q6-opt-1-2-8",
                     "title": "Second Short Term Financial Risk – Score",
                     "type": "text",
                     "triggerOption": "2 short-term risk",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q6-opt-1-2-9",
                     "title": "Describe the second short-term financial risk in detail.",
                     "type": "text",
                     "triggerOption": "2 short-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-1-2-10",
                     "title": "What is the threshold chosen by your financial experts of assessing the materiality of short-term financial risks?",
                     "type": "text",
                     "triggerOption": "2 short-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-1-2-11",
                     "title": "How do you assess the likelihood of this short-term financial risk realizing within the next year?",
                     "type": "text",
                     "triggerOption": "2 short-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-1-2-12",
                     "title": "What is the short-term financial risk relation in Climate change mitigation?",
                     "type": "text",
                     "triggerOption": "2 short-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-1-2-13",
                     "title": "Give a title to the financial risk. ",
                     "type": "text",
                     "triggerOption": "2 short-term risk",
                     "required": true,
                     "description": "Please keep the risk title concise"
                  },
                  {
                     "id": "q6-opt-1-2-14",
                     "title": "Based on the chosen financial threshold, what is the magnitude of the short-term risk?",
                     "type": "multiple-choice",
                     "triggerOption": "2 short-term risk",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Insignificant" },
                        { "id": "opt2", "text": "Negligible" },
                        { "id": "opt3", "text": "Moderate" },
                        { "id": "opt4", "text": "Externsive" },
                        { "id": "opt5", "text": "Significant" }
                     ]
                  },
                  {
                     "id": "q6-opt-1-2-15",
                     "title": "What is the potential likelihood of these short-term financial risk realizing in the next two to five years?",
                     "type": "multiple-choice",
                     "triggerOption": "2 short-term risk",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very low" },
                        { "id": "opt2", "text": "Low" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "High" },
                        { "id": "opt5", "text": "Very High" }
                     ]
                  },
                  {
                     "id": "q6-opt-1-2-16",
                     "title": "Second Short Term Financial Risk – Score",
                     "type": "text",
                     "triggerOption": "2 short-term risk",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q6-opt-1-3-1",
                     "title": "Describe the first short-term financial risk in detail.",
                     "type": "text",
                     "triggerOption": "3 short-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-1-3-2",
                     "title": "What is the threshold chosen by your financial experts of assessing the materiality of 3 short-term financial risks?",
                     "type": "text",
                     "triggerOption": "3 short-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-1-3-3",
                     "title": "How do you assess the likelihood of this 3 short-term financial risk realizing within the next year?",
                     "type": "text",
                     "triggerOption": "3 short-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-1-3-4",
                     "title": "What is the 3 short-term financial risk relation in Climate change mitigation?",
                     "type": "text",
                     "triggerOption": "3 short-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-1-3-5",
                     "title": "Give a title to the financial risk. ",
                     "type": "text",
                     "triggerOption": "3 short-term risk",
                     "required": true,
                     "description": "Please keep the risk title concise"
                  },
                  {
                     "id": "q6-opt-1-3-6",
                     "title": "Based on the chosen financial threshold, what is the magnitude of the 3 short-term risk?",
                     "type": "multiple-choice",
                     "triggerOption": "3 short-term risk",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Insignificant" },
                        { "id": "opt2", "text": "Negligible" },
                        { "id": "opt3", "text": "Moderate" },
                        { "id": "opt4", "text": "Externsive" },
                        { "id": "opt5", "text": "Significant" }
                     ]
                  },
                  {
                     "id": "q6-opt-1-3-7",
                     "title": "What is the potential likelihood of these 3 short-term financial risk realizing in the next two to five years?",
                     "type": "multiple-choice",
                     "triggerOption": "3 short-term risk",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very low" },
                        { "id": "opt2", "text": "Low" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "High" },
                        { "id": "opt5", "text": "Very High" }
                     ]
                  },
                  {
                     "id": "q6-opt-1-3-8",
                     "title": "Third Short Term Financial Risk – Score",
                     "type": "text",
                     "triggerOption": "3 short-term risk",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q6-opt-1-3-9",
                     "title": "Describe the second short-term financial risk in detail.",
                     "type": "text",
                     "triggerOption": "3 short-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-1-3-10",
                     "title": "What is the threshold chosen by your financial experts of assessing the materiality of 3 short-term financial risks?",
                     "type": "text",
                     "triggerOption": "3 short-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-1-3-11",
                     "title": "How do you assess the likelihood of this 3 short-term financial risk realizing within the next year?",
                     "type": "text",
                     "triggerOption": "3 short-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-1-3-12",
                     "title": "What is the 3 short-term financial risk relation in Climate change mitigation?",
                     "type": "text",
                     "triggerOption": "3 short-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-1-3-13",
                     "title": "Give a title to the financial risk. ",
                     "type": "text",
                     "triggerOption": "3 short-term risk",
                     "required": true,
                     "description": "Please keep the risk title concise"
                  },
                  {
                     "id": "q6-opt-1-3-14",
                     "title": "Based on the chosen financial threshold, what is the magnitude of the 3 short-term risk?",
                     "type": "multiple-choice",
                     "triggerOption": "3 short-term risk",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Insignificant" },
                        { "id": "opt2", "text": "Negligible" },
                        { "id": "opt3", "text": "Moderate" },
                        { "id": "opt4", "text": "Externsive" },
                        { "id": "opt5", "text": "Significant" }
                     ]
                  },
                  {
                     "id": "q6-opt-1-3-15",
                     "title": "What is the potential likelihood of these 3 short-term financial risk realizing in the next two to five years?",
                     "type": "multiple-choice",
                     "triggerOption": "3 short-term risk",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very low" },
                        { "id": "opt2", "text": "Low" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "High" },
                        { "id": "opt5", "text": "Very High" }
                     ]
                  },
                  {
                     "id": "q6-opt-1-3-16",
                     "title": "Third Short Term Financial Risk – Score",
                     "type": "text",
                     "triggerOption": "3 short-term risk",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q6-opt-1-3-17",
                     "title": "Describe the third short-term financial risk in detail.",
                     "type": "text",
                     "triggerOption": "3 short-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-1-3-18",
                     "title": "What is the threshold chosen by your financial experts of assessing the materiality of 3 short-term financial risks?",
                     "type": "text",
                     "triggerOption": "3 short-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-1-3-19",
                     "title": "How do you assess the likelihood of this 3 short-term financial risk realizing within the next year?",
                     "type": "text",
                     "triggerOption": "3 short-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-1-3-20",
                     "title": "What is the 3 short-term financial risk relation in Climate change mitigation?",
                     "type": "text",
                     "triggerOption": "3 short-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-1-3-21",
                     "title": "Give a title to the financial risk. ",
                     "type": "text",
                     "triggerOption": "3 short-term risk",
                     "required": true,
                     "description": "Please keep the risk title concise"
                  },
                  {
                     "id": "q6-opt-1-3-22",
                     "title": "Based on the chosen financial threshold, what is the magnitude of the 3 short-term risk?",
                     "type": "multiple-choice",
                     "triggerOption": "3 short-term risk",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Insignificant" },
                        { "id": "opt2", "text": "Negligible" },
                        { "id": "opt3", "text": "Moderate" },
                        { "id": "opt4", "text": "Externsive" },
                        { "id": "opt5", "text": "Significant" }
                     ]
                  },
                  {
                     "id": "q6-opt-1-3-23",
                     "title": "What is the potential likelihood of these 3 short-term financial risk realizing in the next two to five years?",
                     "type": "multiple-choice",
                     "triggerOption": "3 short-term risk",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very low" },
                        { "id": "opt2", "text": "Low" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "High" },
                        { "id": "opt5", "text": "Very High" }
                     ]
                  },
                  {
                     "id": "q6-opt-1-3-24",
                     "title": "Third Short Term Financial Risk – Score",
                     "type": "text",
                     "triggerOption": "3 short-term risk",
                     "required": true,
                     "description": "END"
                  },
               ],
            },
            {
               "id": "q6-opt-2-1",
               "title": "How many mid-term financial risks have you identified?",
               "type": "multiple-choice",
               "required": true,
               "triggerOption": "Yes: in mid-term (<1 year)",
               "options": [
                  { "id": "opt1", "text": "1 mid-term risk" },
                  { "id": "opt2", "text": "2 mid-term risk" },
                  { "id": "opt3", "text": "3 mid-term risk" },
               ],
               subQuestions: [
                  {
                     "id": "q6-opt-2-1-1",
                     "title": "Describe the first mid-term financial risk in detail.",
                     "type": "text",
                     "triggerOption": "1 mid-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-2-1-2",
                     "title": "What is the threshold chosen by your financial experts of assessing the materiality of mid-term financial risks?",
                     "type": "text",
                     "triggerOption": "1 mid-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-2-1-3",
                     "title": "How do you assess the likelihood of this mid-term financial risk realizing within the next year?",
                     "type": "text",
                     "triggerOption": "1 mid-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-2-1-4",
                     "title": "What is the mid-term financial risk relation in Climate change mitigation?",
                     "type": "text",
                     "triggerOption": "1 mid-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-2-1-5",
                     "title": "Give a title to the financial risk. ",
                     "type": "text",
                     "triggerOption": "1 mid-term risk",
                     "required": true,
                     "description": "Please keep the risk title concise"
                  },
                  {
                     "id": "q6-opt-2-1-6",
                     "title": "Based on the chosen financial threshold, what is the magnitude of the mid-term risk?",
                     "type": "multiple-choice",
                     "triggerOption": "1 mid-term risk",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Insignificant" },
                        { "id": "opt2", "text": "Negligible" },
                        { "id": "opt3", "text": "Moderate" },
                        { "id": "opt4", "text": "Externsive" },
                        { "id": "opt5", "text": "Significant" }
                     ]
                  },
                  {
                     "id": "q6-opt-2-1-7",
                     "title": "What is the potential likelihood of these mid-term financial risk realizing in the next two to five years?",
                     "type": "multiple-choice",
                     "triggerOption": "1 mid-term risk",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very low" },
                        { "id": "opt2", "text": "Low" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "High" },
                        { "id": "opt5", "text": "Very High" }
                     ]
                  },
                  {
                     "id": "q6-opt-2-1-8",
                     "title": "Medium Term Financial Risk – Score",
                     "type": "text",
                     "triggerOption": "1 mid-term risk",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q6-opt-2-2-1",
                     "title": "Describe the first mid-term financial risk in detail.",
                     "type": "text",
                     "triggerOption": "2 mid-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-2-2-2",
                     "title": "What is the threshold chosen by your financial experts of assessing the materiality of mid-term financial risks?",
                     "type": "text",
                     "triggerOption": "2 mid-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-2-2-3",
                     "title": "How do you assess the likelihood of this mid-term financial risk realizing within the next year?",
                     "type": "text",
                     "triggerOption": "2 mid-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-2-2-4",
                     "title": "What is the mid-term financial risk relation in Climate change mitigation?",
                     "type": "text",
                     "triggerOption": "2 mid-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-2-2-5",
                     "title": "Give a title to the financial risk. ",
                     "type": "text",
                     "triggerOption": "2 mid-term risk",
                     "required": true,
                     "description": "Please keep the risk title concise"
                  },
                  {
                     "id": "q6-opt-2-2-6",
                     "title": "Based on the chosen financial threshold, what is the magnitude of the mid-term risk?",
                     "type": "multiple-choice",
                     "triggerOption": "2 mid-term risk",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Insignificant" },
                        { "id": "opt2", "text": "Negligible" },
                        { "id": "opt3", "text": "Moderate" },
                        { "id": "opt4", "text": "Externsive" },
                        { "id": "opt5", "text": "Significant" }
                     ]
                  },
                  {
                     "id": "q6-opt-2-2-7",
                     "title": "What is the potential likelihood of these mid-term financial risk realizing in the next two to five years?",
                     "type": "multiple-choice",
                     "triggerOption": "2 mid-term risk",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very low" },
                        { "id": "opt2", "text": "Low" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "High" },
                        { "id": "opt5", "text": "Very High" }
                     ]
                  },
                  {
                     "id": "q6-opt-2-2-8",
                     "title": "Second Medium Term Financial Risk – Score",
                     "type": "text",
                     "triggerOption": "2 mid-term risk",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q6-opt-2-2-9",
                     "title": "Describe the second mid-term financial risk in detail.",
                     "type": "text",
                     "triggerOption": "2 mid-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-2-2-10",
                     "title": "What is the threshold chosen by your financial experts of assessing the materiality of mid-term financial risks?",
                     "type": "text",
                     "triggerOption": "2 mid-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-2-2-11",
                     "title": "How do you assess the likelihood of this mid-term financial risk realizing within the next year?",
                     "type": "text",
                     "triggerOption": "2 mid-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-2-2-12",
                     "title": "What is the mid-term financial risk relation in Climate change mitigation?",
                     "type": "text",
                     "triggerOption": "2 mid-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-2-2-13",
                     "title": "Give a title to the financial risk. ",
                     "type": "text",
                     "triggerOption": "2 mid-term risk",
                     "required": true,
                     "description": "Please keep the risk title concise"
                  },
                  {
                     "id": "q6-opt-2-2-14",
                     "title": "Based on the chosen financial threshold, what is the magnitude of the mid-term risk?",
                     "type": "multiple-choice",
                     "triggerOption": "2 mid-term risk",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Insignificant" },
                        { "id": "opt2", "text": "Negligible" },
                        { "id": "opt3", "text": "Moderate" },
                        { "id": "opt4", "text": "Externsive" },
                        { "id": "opt5", "text": "Significant" }
                     ]
                  },
                  {
                     "id": "q6-opt-2-2-15",
                     "title": "What is the potential likelihood of these mid-term financial risk realizing in the next two to five years?",
                     "type": "multiple-choice",
                     "triggerOption": "2 mid-term risk",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very low" },
                        { "id": "opt2", "text": "Low" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "High" },
                        { "id": "opt5", "text": "Very High" }
                     ]
                  },
                  {
                     "id": "q6-opt-2-2-16",
                     "title": "Second Medium Term Financial Risk – Score",
                     "type": "text",
                     "triggerOption": "2 mid-term risk",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q6-opt-2-3-1",
                     "title": "Describe the first mid-term financial risk in detail.",
                     "type": "text",
                     "triggerOption": "3 mid-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-2-3-2",
                     "title": "What is the threshold chosen by your financial experts of assessing the materiality of 3 mid-term financial risks?",
                     "type": "text",
                     "triggerOption": "3 mid-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-2-3-3",
                     "title": "How do you assess the likelihood of this 3 mid-term financial risk realizing within the next year?",
                     "type": "text",
                     "triggerOption": "3 mid-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-2-3-4",
                     "title": "What is the 3 mid-term financial risk relation in Climate change mitigation?",
                     "type": "text",
                     "triggerOption": "3 mid-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-2-3-5",
                     "title": "Give a title to the financial risk. ",
                     "type": "text",
                     "triggerOption": "3 mid-term risk",
                     "required": true,
                     "description": "Please keep the risk title concise"
                  },
                  {
                     "id": "q6-opt-2-3-6",
                     "title": "Based on the chosen financial threshold, what is the magnitude of the 3 mid-term risk?",
                     "type": "multiple-choice",
                     "triggerOption": "3 mid-term risk",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Insignificant" },
                        { "id": "opt2", "text": "Negligible" },
                        { "id": "opt3", "text": "Moderate" },
                        { "id": "opt4", "text": "Externsive" },
                        { "id": "opt5", "text": "Significant" }
                     ]
                  },
                  {
                     "id": "q6-opt-2-3-7",
                     "title": "What is the potential likelihood of these 3 mid-term financial risk realizing in the next two to five years?",
                     "type": "multiple-choice",
                     "triggerOption": "3 mid-term risk",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very low" },
                        { "id": "opt2", "text": "Low" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "High" },
                        { "id": "opt5", "text": "Very High" }
                     ]
                  },
                  {
                     "id": "q6-opt-2-3-8",
                     "title": "Third Medium Term Financial Risk – Score",
                     "type": "text",
                     "triggerOption": "3 mid-term risk",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q6-opt-2-3-9",
                     "title": "Describe the second mid-term financial risk in detail.",
                     "type": "text",
                     "triggerOption": "3 mid-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-2-3-10",
                     "title": "What is the threshold chosen by your financial experts of assessing the materiality of 3 mid-term financial risks?",
                     "type": "text",
                     "triggerOption": "3 mid-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-2-3-11",
                     "title": "How do you assess the likelihood of this 3 mid-term financial risk realizing within the next year?",
                     "type": "text",
                     "triggerOption": "3 mid-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-2-3-12",
                     "title": "What is the 3 mid-term financial risk relation in Climate change mitigation?",
                     "type": "text",
                     "triggerOption": "3 mid-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-2-3-13",
                     "title": "Give a title to the financial risk. ",
                     "type": "text",
                     "triggerOption": "3 mid-term risk",
                     "required": true,
                     "description": "Please keep the risk title concise"
                  },
                  {
                     "id": "q6-opt-2-3-14",
                     "title": "Based on the chosen financial threshold, what is the magnitude of the 3 mid-term risk?",
                     "type": "multiple-choice",
                     "triggerOption": "3 mid-term risk",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Insignificant" },
                        { "id": "opt2", "text": "Negligible" },
                        { "id": "opt3", "text": "Moderate" },
                        { "id": "opt4", "text": "Externsive" },
                        { "id": "opt5", "text": "Significant" }
                     ]
                  },
                  {
                     "id": "q6-opt-2-3-15",
                     "title": "What is the potential likelihood of these 3 mid-term financial risk realizing in the next two to five years?",
                     "type": "multiple-choice",
                     "triggerOption": "3 mid-term risk",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very low" },
                        { "id": "opt2", "text": "Low" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "High" },
                        { "id": "opt5", "text": "Very High" }
                     ]
                  },
                  {
                     "id": "q6-opt-2-3-16",
                     "title": "Third Medium Term Financial Risk – Score",
                     "type": "text",
                     "triggerOption": "3 mid-term risk",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q6-opt-2-3-17",
                     "title": "Describe the third mid-term financial risk in detail.",
                     "type": "text",
                     "triggerOption": "3 mid-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-2-3-18",
                     "title": "What is the threshold chosen by your financial experts of assessing the materiality of 3 mid-term financial risks?",
                     "type": "text",
                     "triggerOption": "3 mid-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-2-3-19",
                     "title": "How do you assess the likelihood of this 3 mid-term financial risk realizing within the next year?",
                     "type": "text",
                     "triggerOption": "3 mid-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-2-3-20",
                     "title": "What is the 3 mid-term financial risk relation in Climate change mitigation?",
                     "type": "text",
                     "triggerOption": "3 mid-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-2-3-21",
                     "title": "Give a title to the financial risk. ",
                     "type": "text",
                     "triggerOption": "3 mid-term risk",
                     "required": true,
                     "description": "Please keep the risk title concise"
                  },
                  {
                     "id": "q6-opt-2-3-22",
                     "title": "Based on the chosen financial threshold, what is the magnitude of the 3 mid-term risk?",
                     "type": "multiple-choice",
                     "triggerOption": "3 mid-term risk",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Insignificant" },
                        { "id": "opt2", "text": "Negligible" },
                        { "id": "opt3", "text": "Moderate" },
                        { "id": "opt4", "text": "Externsive" },
                        { "id": "opt5", "text": "Significant" }
                     ]
                  },
                  {
                     "id": "q6-opt-2-3-23",
                     "title": "What is the potential likelihood of these 3 mid-term financial risk realizing in the next two to five years?",
                     "type": "multiple-choice",
                     "triggerOption": "3 mid-term risk",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very low" },
                        { "id": "opt2", "text": "Low" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "High" },
                        { "id": "opt5", "text": "Very High" }
                     ]
                  },
                  {
                     "id": "q6-opt-2-3-24",
                     "title": "Third Medium Term Financial Risk – Score",
                     "type": "text",
                     "triggerOption": "3 mid-term risk",
                     "required": true,
                     "description": "END"
                  },
               ],
            },
            {
               "id": "q6-opt-3-1",
               "title": "How many long-term financial risks have you identified?",
               "type": "multiple-choice",
               "required": true,
               "triggerOption": "Yes: in long-term (<1 year)",
               "options": [
                  { "id": "opt1", "text": "1 long-term risk" },
                  { "id": "opt2", "text": "2 long-term risk" },
                  { "id": "opt3", "text": "3 long-term risk" },
               ],
               subQuestions: [
                  {
                     "id": "q6-opt-3-1-1",
                     "title": "Describe the first long-term financial risk in detail.",
                     "type": "text",
                     "triggerOption": "1 long-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-3-1-2",
                     "title": "What is the threshold chosen by your financial experts of assessing the materiality of long-term financial risks?",
                     "type": "text",
                     "triggerOption": "1 long-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-3-1-3",
                     "title": "How do you assess the likelihood of this long-term financial risk realizing within the next year?",
                     "type": "text",
                     "triggerOption": "1 long-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-3-1-4",
                     "title": "What is the long-term financial risk relation in Climate change mitigation?",
                     "type": "text",
                     "triggerOption": "1 long-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-3-1-5",
                     "title": "Give a title to the financial risk. ",
                     "type": "text",
                     "triggerOption": "1 long-term risk",
                     "required": true,
                     "description": "Please keep the risk title concise"
                  },
                  {
                     "id": "q6-opt-3-1-6",
                     "title": "Based on the chosen financial threshold, what is the magnitude of the long-term risk?",
                     "type": "multiple-choice",
                     "triggerOption": "1 long-term risk",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Insignificant" },
                        { "id": "opt2", "text": "Negligible" },
                        { "id": "opt3", "text": "Moderate" },
                        { "id": "opt4", "text": "Externsive" },
                        { "id": "opt5", "text": "Significant" }
                     ]
                  },
                  {
                     "id": "q6-opt-3-1-7",
                     "title": "What is the potential likelihood of these long-term financial risk realizing in the next two to five years?",
                     "type": "multiple-choice",
                     "triggerOption": "1 long-term risk",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very low" },
                        { "id": "opt2", "text": "Low" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "High" },
                        { "id": "opt5", "text": "Very High" }
                     ]
                  },
                  {
                     "id": "q6-opt-3-1-8",
                     "title": "Long Term Financial Risk – Score",
                     "type": "text",
                     "triggerOption": "1 long-term risk",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q6-opt-3-2-1",
                     "title": "Describe the first long-term financial risk in detail.",
                     "type": "text",
                     "triggerOption": "2 long-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-3-2-2",
                     "title": "What is the threshold chosen by your financial experts of assessing the materiality of long-term financial risks?",
                     "type": "text",
                     "triggerOption": "2 long-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-3-2-3",
                     "title": "How do you assess the likelihood of this long-term financial risk realizing within the next year?",
                     "type": "text",
                     "triggerOption": "2 long-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-3-2-4",
                     "title": "What is the long-term financial risk relation in Climate change mitigation?",
                     "type": "text",
                     "triggerOption": "2 long-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-3-2-5",
                     "title": "Give a title to the financial risk. ",
                     "type": "text",
                     "triggerOption": "2 long-term risk",
                     "required": true,
                     "description": "Please keep the risk title concise"
                  },
                  {
                     "id": "q6-opt-3-2-6",
                     "title": "Based on the chosen financial threshold, what is the magnitude of the long-term risk?",
                     "type": "multiple-choice",
                     "triggerOption": "2 long-term risk",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Insignificant" },
                        { "id": "opt2", "text": "Negligible" },
                        { "id": "opt3", "text": "Moderate" },
                        { "id": "opt4", "text": "Externsive" },
                        { "id": "opt5", "text": "Significant" }
                     ]
                  },
                  {
                     "id": "q6-opt-3-2-7",
                     "title": "What is the potential likelihood of these long-term financial risk realizing in the next two to five years?",
                     "type": "multiple-choice",
                     "triggerOption": "2 long-term risk",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very low" },
                        { "id": "opt2", "text": "Low" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "High" },
                        { "id": "opt5", "text": "Very High" }
                     ]
                  },
                  {
                     "id": "q6-opt-3-2-8",
                     "title": "Second Long Term Financial Risk – Score",
                     "type": "text",
                     "triggerOption": "2 long-term risk",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q6-opt-3-2-9",
                     "title": "Describe the second long-term financial risk in detail.",
                     "type": "text",
                     "triggerOption": "2 long-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-3-2-10",
                     "title": "What is the threshold chosen by your financial experts of assessing the materiality of long-term financial risks?",
                     "type": "text",
                     "triggerOption": "2 long-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-3-2-11",
                     "title": "How do you assess the likelihood of this long-term financial risk realizing within the next year?",
                     "type": "text",
                     "triggerOption": "2 long-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-3-2-12",
                     "title": "What is the long-term financial risk relation in Climate change mitigation?",
                     "type": "text",
                     "triggerOption": "2 long-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-3-2-13",
                     "title": "Give a title to the financial risk. ",
                     "type": "text",
                     "triggerOption": "2 long-term risk",
                     "required": true,
                     "description": "Please keep the risk title concise"
                  },
                  {
                     "id": "q6-opt-3-2-14",
                     "title": "Based on the chosen financial threshold, what is the magnitude of the long-term risk?",
                     "type": "multiple-choice",
                     "triggerOption": "2 long-term risk",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Insignificant" },
                        { "id": "opt2", "text": "Negligible" },
                        { "id": "opt3", "text": "Moderate" },
                        { "id": "opt4", "text": "Externsive" },
                        { "id": "opt5", "text": "Significant" }
                     ]
                  },
                  {
                     "id": "q6-opt-3-2-15",
                     "title": "What is the potential likelihood of these long-term financial risk realizing in the next two to five years?",
                     "type": "multiple-choice",
                     "triggerOption": "2 long-term risk",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very low" },
                        { "id": "opt2", "text": "Low" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "High" },
                        { "id": "opt5", "text": "Very High" }
                     ]
                  },
                  {
                     "id": "q6-opt-3-2-16",
                     "title": "Second Long Term Financial Risk – Score",
                     "type": "text",
                     "triggerOption": "2 long-term risk",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q6-opt-3-3-1",
                     "title": "Describe the first long-term financial risk in detail.",
                     "type": "text",
                     "triggerOption": "3 long-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-3-3-2",
                     "title": "What is the threshold chosen by your financial experts of assessing the materiality of 3 long-term financial risks?",
                     "type": "text",
                     "triggerOption": "3 long-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-3-3-3",
                     "title": "How do you assess the likelihood of this 3 long-term financial risk realizing within the next year?",
                     "type": "text",
                     "triggerOption": "3 long-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-3-3-4",
                     "title": "What is the 3 long-term financial risk relation in Climate change mitigation?",
                     "type": "text",
                     "triggerOption": "3 long-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-3-3-5",
                     "title": "Give a title to the financial risk. ",
                     "type": "text",
                     "triggerOption": "3 long-term risk",
                     "required": true,
                     "description": "Please keep the risk title concise"
                  },
                  {
                     "id": "q6-opt-3-3-6",
                     "title": "Based on the chosen financial threshold, what is the magnitude of the 3 long-term risk?",
                     "type": "multiple-choice",
                     "triggerOption": "3 long-term risk",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Insignificant" },
                        { "id": "opt2", "text": "Negligible" },
                        { "id": "opt3", "text": "Moderate" },
                        { "id": "opt4", "text": "Externsive" },
                        { "id": "opt5", "text": "Significant" }
                     ]
                  },
                  {
                     "id": "q6-opt-3-3-7",
                     "title": "What is the potential likelihood of these 3 long-term financial risk realizing in the next two to five years?",
                     "type": "multiple-choice",
                     "triggerOption": "3 long-term risk",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very low" },
                        { "id": "opt2", "text": "Low" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "High" },
                        { "id": "opt5", "text": "Very High" }
                     ]
                  },
                  {
                     "id": "q6-opt-3-3-8",
                     "title": "Third Long Term Financial Risk – Score",
                     "type": "text",
                     "triggerOption": "3 long-term risk",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q6-opt-3-3-9",
                     "title": "Describe the second long-term financial risk in detail.",
                     "type": "text",
                     "triggerOption": "3 long-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-3-3-10",
                     "title": "What is the threshold chosen by your financial experts of assessing the materiality of 3 long-term financial risks?",
                     "type": "text",
                     "triggerOption": "3 long-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-3-3-11",
                     "title": "How do you assess the likelihood of this 3 long-term financial risk realizing within the next year?",
                     "type": "text",
                     "triggerOption": "3 long-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-3-3-12",
                     "title": "What is the 3 long-term financial risk relation in Climate change mitigation?",
                     "type": "text",
                     "triggerOption": "3 long-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-3-3-13",
                     "title": "Give a title to the financial risk. ",
                     "type": "text",
                     "triggerOption": "3 long-term risk",
                     "required": true,
                     "description": "Please keep the risk title concise"
                  },
                  {
                     "id": "q6-opt-3-3-14",
                     "title": "Based on the chosen financial threshold, what is the magnitude of the 3 long-term risk?",
                     "type": "multiple-choice",
                     "triggerOption": "3 long-term risk",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Insignificant" },
                        { "id": "opt2", "text": "Negligible" },
                        { "id": "opt3", "text": "Moderate" },
                        { "id": "opt4", "text": "Externsive" },
                        { "id": "opt5", "text": "Significant" }
                     ]
                  },
                  {
                     "id": "q6-opt-3-3-15",
                     "title": "What is the potential likelihood of these 3 long-term financial risk realizing in the next two to five years?",
                     "type": "multiple-choice",
                     "triggerOption": "3 long-term risk",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very low" },
                        { "id": "opt2", "text": "Low" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "High" },
                        { "id": "opt5", "text": "Very High" }
                     ]
                  },
                  {
                     "id": "q6-opt-3-3-16",
                     "title": "Third Long Term Financial Risk – Score",
                     "type": "text",
                     "triggerOption": "3 long-term risk",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q6-opt-3-3-17",
                     "title": "Describe the third long-term financial risk in detail.",
                     "type": "text",
                     "triggerOption": "3 long-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-3-3-18",
                     "title": "What is the threshold chosen by your financial experts of assessing the materiality of 3 long-term financial risks?",
                     "type": "text",
                     "triggerOption": "3 long-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-3-3-19",
                     "title": "How do you assess the likelihood of this 3 long-term financial risk realizing within the next year?",
                     "type": "text",
                     "triggerOption": "3 long-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-3-3-20",
                     "title": "What is the 3 long-term financial risk relation in Climate change mitigation?",
                     "type": "text",
                     "triggerOption": "3 long-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-3-3-21",
                     "title": "Give a title to the financial risk. ",
                     "type": "text",
                     "triggerOption": "3 long-term risk",
                     "required": true,
                     "description": "Please keep the risk title concise"
                  },
                  {
                     "id": "q6-opt-3-3-22",
                     "title": "Based on the chosen financial threshold, what is the magnitude of the 3 long-term risk?",
                     "type": "multiple-choice",
                     "triggerOption": "3 long-term risk",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Insignificant" },
                        { "id": "opt2", "text": "Negligible" },
                        { "id": "opt3", "text": "Moderate" },
                        { "id": "opt4", "text": "Externsive" },
                        { "id": "opt5", "text": "Significant" }
                     ]
                  },
                  {
                     "id": "q6-opt-3-3-23",
                     "title": "What is the potential likelihood of these 3 long-term financial risk realizing in the next two to five years?",
                     "type": "multiple-choice",
                     "triggerOption": "3 long-term risk",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very low" },
                        { "id": "opt2", "text": "Low" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "High" },
                        { "id": "opt5", "text": "Very High" }
                     ]
                  },
                  {
                     "id": "q6-opt-3-3-24",
                     "title": "Third Long Term Financial Risk – Score",
                     "type": "text",
                     "triggerOption": "3 long-term risk",
                     "required": true,
                     "description": "END"
                  },
               ],
            },
         ],
      },
      {
         "id": "q7",
         "title": "Do you foresee financial opportunities in the indicated periods related to Climate change mitigation?",
         "type": "multiple-choice",
         "required": true,
         "options": [
            { "id": "opt1", "text": "Yes: in short-term (<1 year)" },
            { "id": "opt2", "text": "Yes: in mid-term (1-5 years)" },
            { "id": "opt3", "text": "Yes: in long-term (>5 years)" },
            { "id": "opt4", "text": "No" }
         ],
         subQuestions: [
            {
               "id": "q7-opt-1-1",
               "title": "How many short-term financial opportunities have you identified?",
               "type": "multiple-choice",
               "required": true,
               "triggerOption": "Yes: in short-term (<1 year)",
               "options": [
                  { "id": "opt1", "text": "1 short-term opportunity" },
                  { "id": "opt2", "text": "2 short-term opportunity" },
                  { "id": "opt3", "text": "3 short-term opportunity" },
               ],
               subQuestions: [
                  {
                     "id": "q7-opt-1-1-1",
                     "title": "Describe the first short-term financial opportunity in detail.",
                     "type": "text",
                     "triggerOption": "1 short-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-1-1-2",
                     "title": "What is the threshold chosen by your financial experts of assessing the materiality of short-term financial opportunities?",
                     "type": "text",
                     "triggerOption": "1 short-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-1-1-3",
                     "title": "How do you assess the likelihood of this short-term financial opportunity realizing within the next year?",
                     "type": "text",
                     "triggerOption": "1 short-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-1-1-4",
                     "title": "What is the short-term financial opportunity relation in Climate change mitigation?",
                     "type": "text",
                     "triggerOption": "1 short-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-1-1-5",
                     "title": "Give a title to the financial opportunity. ",
                     "type": "text",
                     "triggerOption": "1 short-term opportunity",
                     "required": true,
                     "description": "Please keep the opportunity title concise"
                  },
                  {
                     "id": "q7-opt-1-1-6",
                     "title": "Based on the chosen financial threshold, what is the magnitude of the short-term opportunity?",
                     "type": "multiple-choice",
                     "triggerOption": "1 short-term opportunity",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Insignificant" },
                        { "id": "opt2", "text": "Negligible" },
                        { "id": "opt3", "text": "Moderate" },
                        { "id": "opt4", "text": "Externsive" },
                        { "id": "opt5", "text": "Significant" }
                     ]
                  },
                  {
                     "id": "q7-opt-1-1-7",
                     "title": "What is the potential likelihood of these short-term financial opportunity realizing in the next two to five years?",
                     "type": "multiple-choice",
                     "triggerOption": "1 short-term opportunity",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very low" },
                        { "id": "opt2", "text": "Low" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "High" },
                        { "id": "opt5", "text": "Very High" }
                     ]
                  },
                  {
                     "id": "q7-opt-1-1-8",
                     "title": "Short Term Financial opportunity – Score",
                     "type": "text",
                     "triggerOption": "1 short-term opportunity",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q7-opt-1-2-1",
                     "title": "Describe the first short-term financial opportunity in detail.",
                     "type": "text",
                     "triggerOption": "2 short-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-1-2-2",
                     "title": "What is the threshold chosen by your financial experts of assessing the materiality of short-term financial opportunities?",
                     "type": "text",
                     "triggerOption": "2 short-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-1-2-3",
                     "title": "How do you assess the likelihood of this short-term financial opportunity realizing within the next year?",
                     "type": "text",
                     "triggerOption": "2 short-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-1-2-4",
                     "title": "What is the short-term financial opportunity relation in Climate change mitigation?",
                     "type": "text",
                     "triggerOption": "2 short-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-1-2-5",
                     "title": "Give a title to the financial opportunity. ",
                     "type": "text",
                     "triggerOption": "2 short-term opportunity",
                     "required": true,
                     "description": "Please keep the opportunity title concise"
                  },
                  {
                     "id": "q7-opt-1-2-6",
                     "title": "Based on the chosen financial threshold, what is the magnitude of the short-term opportunity?",
                     "type": "multiple-choice",
                     "triggerOption": "2 short-term opportunity",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Insignificant" },
                        { "id": "opt2", "text": "Negligible" },
                        { "id": "opt3", "text": "Moderate" },
                        { "id": "opt4", "text": "Externsive" },
                        { "id": "opt5", "text": "Significant" }
                     ]
                  },
                  {
                     "id": "q7-opt-1-2-7",
                     "title": "What is the potential likelihood of these short-term financial opportunity realizing in the next two to five years?",
                     "type": "multiple-choice",
                     "triggerOption": "2 short-term opportunity",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very low" },
                        { "id": "opt2", "text": "Low" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "High" },
                        { "id": "opt5", "text": "Very High" }
                     ]
                  },
                  {
                     "id": "q7-opt-1-2-8",
                     "title": "Second Short Term Financial opportunity – Score",
                     "type": "text",
                     "triggerOption": "2 short-term opportunity",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q7-opt-1-2-9",
                     "title": "Describe the second short-term financial opportunity in detail.",
                     "type": "text",
                     "triggerOption": "2 short-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-1-2-10",
                     "title": "What is the threshold chosen by your financial experts of assessing the materiality of short-term financial opportunities?",
                     "type": "text",
                     "triggerOption": "2 short-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-1-2-11",
                     "title": "How do you assess the likelihood of this short-term financial opportunity realizing within the next year?",
                     "type": "text",
                     "triggerOption": "2 short-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-1-2-12",
                     "title": "What is the short-term financial opportunity relation in Climate change mitigation?",
                     "type": "text",
                     "triggerOption": "2 short-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-1-2-13",
                     "title": "Give a title to the financial opportunity. ",
                     "type": "text",
                     "triggerOption": "2 short-term opportunity",
                     "required": true,
                     "description": "Please keep the opportunity title concise"
                  },
                  {
                     "id": "q7-opt-1-2-14",
                     "title": "Based on the chosen financial threshold, what is the magnitude of the short-term opportunity?",
                     "type": "multiple-choice",
                     "triggerOption": "2 short-term opportunity",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Insignificant" },
                        { "id": "opt2", "text": "Negligible" },
                        { "id": "opt3", "text": "Moderate" },
                        { "id": "opt4", "text": "Externsive" },
                        { "id": "opt5", "text": "Significant" }
                     ]
                  },
                  {
                     "id": "q7-opt-1-2-15",
                     "title": "What is the potential likelihood of these short-term financial opportunity realizing in the next two to five years?",
                     "type": "multiple-choice",
                     "triggerOption": "2 short-term opportunity",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very low" },
                        { "id": "opt2", "text": "Low" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "High" },
                        { "id": "opt5", "text": "Very High" }
                     ]
                  },
                  {
                     "id": "q7-opt-1-2-16",
                     "title": "Second Short Term Financial opportunity – Score",
                     "type": "text",
                     "triggerOption": "2 short-term opportunity",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q7-opt-1-3-1",
                     "title": "Describe the first short-term financial opportunity in detail.",
                     "type": "text",
                     "triggerOption": "3 short-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-1-3-2",
                     "title": "What is the threshold chosen by your financial experts of assessing the materiality of 3 short-term financial opportunities?",
                     "type": "text",
                     "triggerOption": "3 short-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-1-3-3",
                     "title": "How do you assess the likelihood of this 3 short-term financial opportunity realizing within the next year?",
                     "type": "text",
                     "triggerOption": "3 short-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-1-3-4",
                     "title": "What is the 3 short-term financial opportunity relation in Climate change mitigation?",
                     "type": "text",
                     "triggerOption": "3 short-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-1-3-5",
                     "title": "Give a title to the financial opportunity. ",
                     "type": "text",
                     "triggerOption": "3 short-term opportunity",
                     "required": true,
                     "description": "Please keep the opportunity title concise"
                  },
                  {
                     "id": "q7-opt-1-3-6",
                     "title": "Based on the chosen financial threshold, what is the magnitude of the 3 short-term opportunity?",
                     "type": "multiple-choice",
                     "triggerOption": "3 short-term opportunity",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Insignificant" },
                        { "id": "opt2", "text": "Negligible" },
                        { "id": "opt3", "text": "Moderate" },
                        { "id": "opt4", "text": "Externsive" },
                        { "id": "opt5", "text": "Significant" }
                     ]
                  },
                  {
                     "id": "q7-opt-1-3-7",
                     "title": "What is the potential likelihood of these 3 short-term financial opportunity realizing in the next two to five years?",
                     "type": "multiple-choice",
                     "triggerOption": "3 short-term opportunity",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very low" },
                        { "id": "opt2", "text": "Low" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "High" },
                        { "id": "opt5", "text": "Very High" }
                     ]
                  },
                  {
                     "id": "q7-opt-1-3-8",
                     "title": "Third Short Term Financial opportunity – Score",
                     "type": "text",
                     "triggerOption": "3 short-term opportunity",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q7-opt-1-3-9",
                     "title": "Describe the second short-term financial opportunity in detail.",
                     "type": "text",
                     "triggerOption": "3 short-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-1-3-10",
                     "title": "What is the threshold chosen by your financial experts of assessing the materiality of 3 short-term financial opportunities?",
                     "type": "text",
                     "triggerOption": "3 short-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-1-3-11",
                     "title": "How do you assess the likelihood of this 3 short-term financial opportunity realizing within the next year?",
                     "type": "text",
                     "triggerOption": "3 short-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-1-3-12",
                     "title": "What is the 3 short-term financial opportunity relation in Climate change mitigation?",
                     "type": "text",
                     "triggerOption": "3 short-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-1-3-13",
                     "title": "Give a title to the financial opportunity. ",
                     "type": "text",
                     "triggerOption": "3 short-term opportunity",
                     "required": true,
                     "description": "Please keep the opportunity title concise"
                  },
                  {
                     "id": "q7-opt-1-3-14",
                     "title": "Based on the chosen financial threshold, what is the magnitude of the 3 short-term opportunity?",
                     "type": "multiple-choice",
                     "triggerOption": "3 short-term opportunity",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Insignificant" },
                        { "id": "opt2", "text": "Negligible" },
                        { "id": "opt3", "text": "Moderate" },
                        { "id": "opt4", "text": "Externsive" },
                        { "id": "opt5", "text": "Significant" }
                     ]
                  },
                  {
                     "id": "q7-opt-1-3-15",
                     "title": "What is the potential likelihood of these 3 short-term financial opportunity realizing in the next two to five years?",
                     "type": "multiple-choice",
                     "triggerOption": "3 short-term opportunity",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very low" },
                        { "id": "opt2", "text": "Low" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "High" },
                        { "id": "opt5", "text": "Very High" }
                     ]
                  },
                  {
                     "id": "q7-opt-1-3-16",
                     "title": "Third Short Term Financial opportunity – Score",
                     "type": "text",
                     "triggerOption": "3 short-term opportunity",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q7-opt-1-3-17",
                     "title": "Describe the third short-term financial opportunity in detail.",
                     "type": "text",
                     "triggerOption": "3 short-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-1-3-18",
                     "title": "What is the threshold chosen by your financial experts of assessing the materiality of 3 short-term financial opportunities?",
                     "type": "text",
                     "triggerOption": "3 short-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-1-3-19",
                     "title": "How do you assess the likelihood of this 3 short-term financial opportunity realizing within the next year?",
                     "type": "text",
                     "triggerOption": "3 short-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-1-3-20",
                     "title": "What is the 3 short-term financial opportunity relation in Climate change mitigation?",
                     "type": "text",
                     "triggerOption": "3 short-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-1-3-21",
                     "title": "Give a title to the financial opportunity. ",
                     "type": "text",
                     "triggerOption": "3 short-term opportunity",
                     "required": true,
                     "description": "Please keep the opportunity title concise"
                  },
                  {
                     "id": "q7-opt-1-3-22",
                     "title": "Based on the chosen financial threshold, what is the magnitude of the 3 short-term opportunity?",
                     "type": "multiple-choice",
                     "triggerOption": "3 short-term opportunity",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Insignificant" },
                        { "id": "opt2", "text": "Negligible" },
                        { "id": "opt3", "text": "Moderate" },
                        { "id": "opt4", "text": "Externsive" },
                        { "id": "opt5", "text": "Significant" }
                     ]
                  },
                  {
                     "id": "q7-opt-1-3-23",
                     "title": "What is the potential likelihood of these 3 short-term financial opportunity realizing in the next two to five years?",
                     "type": "multiple-choice",
                     "triggerOption": "3 short-term opportunity",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very low" },
                        { "id": "opt2", "text": "Low" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "High" },
                        { "id": "opt5", "text": "Very High" }
                     ]
                  },
                  {
                     "id": "q7-opt-1-3-24",
                     "title": "Third Short Term Financial opportunity – Score",
                     "type": "text",
                     "triggerOption": "3 short-term opportunity",
                     "required": true,
                     "description": "END"
                  },
               ],
            },
            {
               "id": "q7-opt-2-1",
               "title": "How many mid-term financial opportunities have you identified?",
               "type": "multiple-choice",
               "required": true,
               "triggerOption": "Yes: in mid-term (<1 year)",
               "options": [
                  { "id": "opt1", "text": "1 mid-term opportunity" },
                  { "id": "opt2", "text": "2 mid-term opportunity" },
                  { "id": "opt3", "text": "3 mid-term opportunity" },
               ],
               subQuestions: [
                  {
                     "id": "q7-opt-2-1-1",
                     "title": "Describe the first mid-term financial opportunity in detail.",
                     "type": "text",
                     "triggerOption": "1 mid-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-2-1-2",
                     "title": "What is the threshold chosen by your financial experts of assessing the materiality of mid-term financial opportunities?",
                     "type": "text",
                     "triggerOption": "1 mid-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-2-1-3",
                     "title": "How do you assess the likelihood of this mid-term financial opportunity realizing within the next year?",
                     "type": "text",
                     "triggerOption": "1 mid-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-2-1-4",
                     "title": "What is the mid-term financial opportunity relation in Climate change mitigation?",
                     "type": "text",
                     "triggerOption": "1 mid-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-2-1-5",
                     "title": "Give a title to the financial opportunity. ",
                     "type": "text",
                     "triggerOption": "1 mid-term opportunity",
                     "required": true,
                     "description": "Please keep the opportunity title concise"
                  },
                  {
                     "id": "q7-opt-2-1-6",
                     "title": "Based on the chosen financial threshold, what is the magnitude of the mid-term opportunity?",
                     "type": "multiple-choice",
                     "triggerOption": "1 mid-term opportunity",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Insignificant" },
                        { "id": "opt2", "text": "Negligible" },
                        { "id": "opt3", "text": "Moderate" },
                        { "id": "opt4", "text": "Externsive" },
                        { "id": "opt5", "text": "Significant" }
                     ]
                  },
                  {
                     "id": "q7-opt-2-1-7",
                     "title": "What is the potential likelihood of these mid-term financial opportunity realizing in the next two to five years?",
                     "type": "multiple-choice",
                     "triggerOption": "1 mid-term opportunity",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very low" },
                        { "id": "opt2", "text": "Low" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "High" },
                        { "id": "opt5", "text": "Very High" }
                     ]
                  },
                  {
                     "id": "q7-opt-2-1-8",
                     "title": "Medium Term Financial opportunity – Score",
                     "type": "text",
                     "triggerOption": "1 mid-term opportunity",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q7-opt-2-2-1",
                     "title": "Describe the first mid-term financial opportunity in detail.",
                     "type": "text",
                     "triggerOption": "2 mid-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-2-2-2",
                     "title": "What is the threshold chosen by your financial experts of assessing the materiality of mid-term financial opportunities?",
                     "type": "text",
                     "triggerOption": "2 mid-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-2-2-3",
                     "title": "How do you assess the likelihood of this mid-term financial opportunity realizing within the next year?",
                     "type": "text",
                     "triggerOption": "2 mid-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-2-2-4",
                     "title": "What is the mid-term financial opportunity relation in Climate change mitigation?",
                     "type": "text",
                     "triggerOption": "2 mid-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-2-2-5",
                     "title": "Give a title to the financial opportunity. ",
                     "type": "text",
                     "triggerOption": "2 mid-term opportunity",
                     "required": true,
                     "description": "Please keep the opportunity title concise"
                  },
                  {
                     "id": "q7-opt-2-2-6",
                     "title": "Based on the chosen financial threshold, what is the magnitude of the mid-term opportunity?",
                     "type": "multiple-choice",
                     "triggerOption": "2 mid-term opportunity",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Insignificant" },
                        { "id": "opt2", "text": "Negligible" },
                        { "id": "opt3", "text": "Moderate" },
                        { "id": "opt4", "text": "Externsive" },
                        { "id": "opt5", "text": "Significant" }
                     ]
                  },
                  {
                     "id": "q7-opt-2-2-7",
                     "title": "What is the potential likelihood of these mid-term financial opportunity realizing in the next two to five years?",
                     "type": "multiple-choice",
                     "triggerOption": "2 mid-term opportunity",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very low" },
                        { "id": "opt2", "text": "Low" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "High" },
                        { "id": "opt5", "text": "Very High" }
                     ]
                  },
                  {
                     "id": "q7-opt-2-2-8",
                     "title": "Second Medium Term Financial opportunity – Score",
                     "type": "text",
                     "triggerOption": "2 mid-term opportunity",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q7-opt-2-2-9",
                     "title": "Describe the second mid-term financial opportunity in detail.",
                     "type": "text",
                     "triggerOption": "2 mid-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-2-2-10",
                     "title": "What is the threshold chosen by your financial experts of assessing the materiality of mid-term financial opportunities?",
                     "type": "text",
                     "triggerOption": "2 mid-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-2-2-11",
                     "title": "How do you assess the likelihood of this mid-term financial opportunity realizing within the next year?",
                     "type": "text",
                     "triggerOption": "2 mid-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-2-2-12",
                     "title": "What is the mid-term financial opportunity relation in Climate change mitigation?",
                     "type": "text",
                     "triggerOption": "2 mid-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-2-2-13",
                     "title": "Give a title to the financial opportunity. ",
                     "type": "text",
                     "triggerOption": "2 mid-term opportunity",
                     "required": true,
                     "description": "Please keep the opportunity title concise"
                  },
                  {
                     "id": "q7-opt-2-2-14",
                     "title": "Based on the chosen financial threshold, what is the magnitude of the mid-term opportunity?",
                     "type": "multiple-choice",
                     "triggerOption": "2 mid-term opportunity",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Insignificant" },
                        { "id": "opt2", "text": "Negligible" },
                        { "id": "opt3", "text": "Moderate" },
                        { "id": "opt4", "text": "Externsive" },
                        { "id": "opt5", "text": "Significant" }
                     ]
                  },
                  {
                     "id": "q7-opt-2-2-15",
                     "title": "What is the potential likelihood of these mid-term financial opportunity realizing in the next two to five years?",
                     "type": "multiple-choice",
                     "triggerOption": "2 mid-term opportunity",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very low" },
                        { "id": "opt2", "text": "Low" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "High" },
                        { "id": "opt5", "text": "Very High" }
                     ]
                  },
                  {
                     "id": "q7-opt-2-2-16",
                     "title": "Second Medium Term Financial opportunity – Score",
                     "type": "text",
                     "triggerOption": "2 mid-term opportunity",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q7-opt-2-3-1",
                     "title": "Describe the first mid-term financial opportunity in detail.",
                     "type": "text",
                     "triggerOption": "3 mid-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-2-3-2",
                     "title": "What is the threshold chosen by your financial experts of assessing the materiality of 3 mid-term financial opportunities?",
                     "type": "text",
                     "triggerOption": "3 mid-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-2-3-3",
                     "title": "How do you assess the likelihood of this 3 mid-term financial opportunity realizing within the next year?",
                     "type": "text",
                     "triggerOption": "3 mid-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-2-3-4",
                     "title": "What is the 3 mid-term financial opportunity relation in Climate change mitigation?",
                     "type": "text",
                     "triggerOption": "3 mid-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-2-3-5",
                     "title": "Give a title to the financial opportunity. ",
                     "type": "text",
                     "triggerOption": "3 mid-term opportunity",
                     "required": true,
                     "description": "Please keep the opportunity title concise"
                  },
                  {
                     "id": "q7-opt-2-3-6",
                     "title": "Based on the chosen financial threshold, what is the magnitude of the 3 mid-term opportunity?",
                     "type": "multiple-choice",
                     "triggerOption": "3 mid-term opportunity",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Insignificant" },
                        { "id": "opt2", "text": "Negligible" },
                        { "id": "opt3", "text": "Moderate" },
                        { "id": "opt4", "text": "Externsive" },
                        { "id": "opt5", "text": "Significant" }
                     ]
                  },
                  {
                     "id": "q7-opt-2-3-7",
                     "title": "What is the potential likelihood of these 3 mid-term financial opportunity realizing in the next two to five years?",
                     "type": "multiple-choice",
                     "triggerOption": "3 mid-term opportunity",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very low" },
                        { "id": "opt2", "text": "Low" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "High" },
                        { "id": "opt5", "text": "Very High" }
                     ]
                  },
                  {
                     "id": "q7-opt-2-3-8",
                     "title": "Third Medium Term Financial opportunity – Score",
                     "type": "text",
                     "triggerOption": "3 mid-term opportunity",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q7-opt-2-3-9",
                     "title": "Describe the second mid-term financial opportunity in detail.",
                     "type": "text",
                     "triggerOption": "3 mid-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-2-3-10",
                     "title": "What is the threshold chosen by your financial experts of assessing the materiality of 3 mid-term financial opportunities?",
                     "type": "text",
                     "triggerOption": "3 mid-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-2-3-11",
                     "title": "How do you assess the likelihood of this 3 mid-term financial opportunity realizing within the next year?",
                     "type": "text",
                     "triggerOption": "3 mid-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-2-3-12",
                     "title": "What is the 3 mid-term financial opportunity relation in Climate change mitigation?",
                     "type": "text",
                     "triggerOption": "3 mid-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-2-3-13",
                     "title": "Give a title to the financial opportunity. ",
                     "type": "text",
                     "triggerOption": "3 mid-term opportunity",
                     "required": true,
                     "description": "Please keep the opportunity title concise"
                  },
                  {
                     "id": "q7-opt-2-3-14",
                     "title": "Based on the chosen financial threshold, what is the magnitude of the 3 mid-term opportunity?",
                     "type": "multiple-choice",
                     "triggerOption": "3 mid-term opportunity",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Insignificant" },
                        { "id": "opt2", "text": "Negligible" },
                        { "id": "opt3", "text": "Moderate" },
                        { "id": "opt4", "text": "Externsive" },
                        { "id": "opt5", "text": "Significant" }
                     ]
                  },
                  {
                     "id": "q7-opt-2-3-15",
                     "title": "What is the potential likelihood of these 3 mid-term financial opportunity realizing in the next two to five years?",
                     "type": "multiple-choice",
                     "triggerOption": "3 mid-term opportunity",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very low" },
                        { "id": "opt2", "text": "Low" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "High" },
                        { "id": "opt5", "text": "Very High" }
                     ]
                  },
                  {
                     "id": "q7-opt-2-3-16",
                     "title": "Third Medium Term Financial opportunity – Score",
                     "type": "text",
                     "triggerOption": "3 mid-term opportunity",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q7-opt-2-3-17",
                     "title": "Describe the third mid-term financial opportunity in detail.",
                     "type": "text",
                     "triggerOption": "3 mid-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-2-3-18",
                     "title": "What is the threshold chosen by your financial experts of assessing the materiality of 3 mid-term financial opportunities?",
                     "type": "text",
                     "triggerOption": "3 mid-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-2-3-19",
                     "title": "How do you assess the likelihood of this 3 mid-term financial opportunity realizing within the next year?",
                     "type": "text",
                     "triggerOption": "3 mid-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-2-3-20",
                     "title": "What is the 3 mid-term financial opportunity relation in Climate change mitigation?",
                     "type": "text",
                     "triggerOption": "3 mid-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-2-3-21",
                     "title": "Give a title to the financial opportunity. ",
                     "type": "text",
                     "triggerOption": "3 mid-term opportunity",
                     "required": true,
                     "description": "Please keep the opportunity title concise"
                  },
                  {
                     "id": "q7-opt-2-3-22",
                     "title": "Based on the chosen financial threshold, what is the magnitude of the 3 mid-term opportunity?",
                     "type": "multiple-choice",
                     "triggerOption": "3 mid-term opportunity",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Insignificant" },
                        { "id": "opt2", "text": "Negligible" },
                        { "id": "opt3", "text": "Moderate" },
                        { "id": "opt4", "text": "Externsive" },
                        { "id": "opt5", "text": "Significant" }
                     ]
                  },
                  {
                     "id": "q7-opt-2-3-23",
                     "title": "What is the potential likelihood of these 3 mid-term financial opportunity realizing in the next two to five years?",
                     "type": "multiple-choice",
                     "triggerOption": "3 mid-term opportunity",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very low" },
                        { "id": "opt2", "text": "Low" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "High" },
                        { "id": "opt5", "text": "Very High" }
                     ]
                  },
                  {
                     "id": "q7-opt-2-3-24",
                     "title": "Third Medium Term Financial opportunity – Score",
                     "type": "text",
                     "triggerOption": "3 mid-term opportunity",
                     "required": true,
                     "description": "END"
                  },
               ],
            },
            {
               "id": "q7-opt-3-1",
               "title": "How many long-term financial opportunities have you identified?",
               "type": "multiple-choice",
               "required": true,
               "triggerOption": "Yes: in long-term (<1 year)",
               "options": [
                  { "id": "opt1", "text": "1 long-term opportunity" },
                  { "id": "opt2", "text": "2 long-term opportunity" },
                  { "id": "opt3", "text": "3 long-term opportunity" },
               ],
               subQuestions: [
                  {
                     "id": "q7-opt-3-1-1",
                     "title": "Describe the first long-term financial opportunity in detail.",
                     "type": "text",
                     "triggerOption": "1 long-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-3-1-2",
                     "title": "What is the threshold chosen by your financial experts of assessing the materiality of long-term financial opportunities?",
                     "type": "text",
                     "triggerOption": "1 long-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-3-1-3",
                     "title": "How do you assess the likelihood of this long-term financial opportunity realizing within the next year?",
                     "type": "text",
                     "triggerOption": "1 long-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-3-1-4",
                     "title": "What is the long-term financial opportunity relation in Climate change mitigation?",
                     "type": "text",
                     "triggerOption": "1 long-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-3-1-5",
                     "title": "Give a title to the financial opportunity. ",
                     "type": "text",
                     "triggerOption": "1 long-term opportunity",
                     "required": true,
                     "description": "Please keep the opportunity title concise"
                  },
                  {
                     "id": "q7-opt-3-1-6",
                     "title": "Based on the chosen financial threshold, what is the magnitude of the long-term opportunity?",
                     "type": "multiple-choice",
                     "triggerOption": "1 long-term opportunity",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Insignificant" },
                        { "id": "opt2", "text": "Negligible" },
                        { "id": "opt3", "text": "Moderate" },
                        { "id": "opt4", "text": "Externsive" },
                        { "id": "opt5", "text": "Significant" }
                     ]
                  },
                  {
                     "id": "q7-opt-3-1-7",
                     "title": "What is the potential likelihood of these long-term financial opportunity realizing in the next two to five years?",
                     "type": "multiple-choice",
                     "triggerOption": "1 long-term opportunity",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very low" },
                        { "id": "opt2", "text": "Low" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "High" },
                        { "id": "opt5", "text": "Very High" }
                     ]
                  },
                  {
                     "id": "q7-opt-3-1-8",
                     "title": "Long Term Financial opportunity – Score",
                     "type": "text",
                     "triggerOption": "1 long-term opportunity",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q7-opt-3-2-1",
                     "title": "Describe the first long-term financial opportunity in detail.",
                     "type": "text",
                     "triggerOption": "2 long-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-3-2-2",
                     "title": "What is the threshold chosen by your financial experts of assessing the materiality of long-term financial opportunities?",
                     "type": "text",
                     "triggerOption": "2 long-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-3-2-3",
                     "title": "How do you assess the likelihood of this long-term financial opportunity realizing within the next year?",
                     "type": "text",
                     "triggerOption": "2 long-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-3-2-4",
                     "title": "What is the long-term financial opportunity relation in Climate change mitigation?",
                     "type": "text",
                     "triggerOption": "2 long-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-3-2-5",
                     "title": "Give a title to the financial opportunity. ",
                     "type": "text",
                     "triggerOption": "2 long-term opportunity",
                     "required": true,
                     "description": "Please keep the opportunity title concise"
                  },
                  {
                     "id": "q7-opt-3-2-6",
                     "title": "Based on the chosen financial threshold, what is the magnitude of the long-term opportunity?",
                     "type": "multiple-choice",
                     "triggerOption": "2 long-term opportunity",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Insignificant" },
                        { "id": "opt2", "text": "Negligible" },
                        { "id": "opt3", "text": "Moderate" },
                        { "id": "opt4", "text": "Externsive" },
                        { "id": "opt5", "text": "Significant" }
                     ]
                  },
                  {
                     "id": "q7-opt-3-2-7",
                     "title": "What is the potential likelihood of these long-term financial opportunity realizing in the next two to five years?",
                     "type": "multiple-choice",
                     "triggerOption": "2 long-term opportunity",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very low" },
                        { "id": "opt2", "text": "Low" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "High" },
                        { "id": "opt5", "text": "Very High" }
                     ]
                  },
                  {
                     "id": "q7-opt-3-2-8",
                     "title": "Second Long Term Financial opportunity – Score",
                     "type": "text",
                     "triggerOption": "2 long-term opportunity",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q7-opt-3-2-9",
                     "title": "Describe the second long-term financial opportunity in detail.",
                     "type": "text",
                     "triggerOption": "2 long-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-3-2-10",
                     "title": "What is the threshold chosen by your financial experts of assessing the materiality of long-term financial opportunities?",
                     "type": "text",
                     "triggerOption": "2 long-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-3-2-11",
                     "title": "How do you assess the likelihood of this long-term financial opportunity realizing within the next year?",
                     "type": "text",
                     "triggerOption": "2 long-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-3-2-12",
                     "title": "What is the long-term financial opportunity relation in Climate change mitigation?",
                     "type": "text",
                     "triggerOption": "2 long-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-3-2-13",
                     "title": "Give a title to the financial opportunity. ",
                     "type": "text",
                     "triggerOption": "2 long-term opportunity",
                     "required": true,
                     "description": "Please keep the opportunity title concise"
                  },
                  {
                     "id": "q7-opt-3-2-14",
                     "title": "Based on the chosen financial threshold, what is the magnitude of the long-term opportunity?",
                     "type": "multiple-choice",
                     "triggerOption": "2 long-term opportunity",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Insignificant" },
                        { "id": "opt2", "text": "Negligible" },
                        { "id": "opt3", "text": "Moderate" },
                        { "id": "opt4", "text": "Externsive" },
                        { "id": "opt5", "text": "Significant" }
                     ]
                  },
                  {
                     "id": "q7-opt-3-2-15",
                     "title": "What is the potential likelihood of these long-term financial opportunity realizing in the next two to five years?",
                     "type": "multiple-choice",
                     "triggerOption": "2 long-term opportunity",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very low" },
                        { "id": "opt2", "text": "Low" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "High" },
                        { "id": "opt5", "text": "Very High" }
                     ]
                  },
                  {
                     "id": "q7-opt-3-2-16",
                     "title": "Second Long Term Financial opportunity – Score",
                     "type": "text",
                     "triggerOption": "2 long-term opportunity",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q7-opt-3-3-1",
                     "title": "Describe the first long-term financial opportunity in detail.",
                     "type": "text",
                     "triggerOption": "3 long-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-3-3-2",
                     "title": "What is the threshold chosen by your financial experts of assessing the materiality of 3 long-term financial opportunities?",
                     "type": "text",
                     "triggerOption": "3 long-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-3-3-3",
                     "title": "How do you assess the likelihood of this 3 long-term financial opportunity realizing within the next year?",
                     "type": "text",
                     "triggerOption": "3 long-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-3-3-4",
                     "title": "What is the 3 long-term financial opportunity relation in Climate change mitigation?",
                     "type": "text",
                     "triggerOption": "3 long-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-3-3-5",
                     "title": "Give a title to the financial opportunity. ",
                     "type": "text",
                     "triggerOption": "3 long-term opportunity",
                     "required": true,
                     "description": "Please keep the opportunity title concise"
                  },
                  {
                     "id": "q7-opt-3-3-6",
                     "title": "Based on the chosen financial threshold, what is the magnitude of the 3 long-term opportunity?",
                     "type": "multiple-choice",
                     "triggerOption": "3 long-term opportunity",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Insignificant" },
                        { "id": "opt2", "text": "Negligible" },
                        { "id": "opt3", "text": "Moderate" },
                        { "id": "opt4", "text": "Externsive" },
                        { "id": "opt5", "text": "Significant" }
                     ]
                  },
                  {
                     "id": "q7-opt-3-3-7",
                     "title": "What is the potential likelihood of these 3 long-term financial opportunity realizing in the next two to five years?",
                     "type": "multiple-choice",
                     "triggerOption": "3 long-term opportunity",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very low" },
                        { "id": "opt2", "text": "Low" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "High" },
                        { "id": "opt5", "text": "Very High" }
                     ]
                  },
                  {
                     "id": "q7-opt-3-3-8",
                     "title": "Third Long Term Financial opportunity – Score",
                     "type": "text",
                     "triggerOption": "3 long-term opportunity",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q7-opt-3-3-9",
                     "title": "Describe the second long-term financial opportunity in detail.",
                     "type": "text",
                     "triggerOption": "3 long-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-3-3-10",
                     "title": "What is the threshold chosen by your financial experts of assessing the materiality of 3 long-term financial opportunities?",
                     "type": "text",
                     "triggerOption": "3 long-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-3-3-11",
                     "title": "How do you assess the likelihood of this 3 long-term financial opportunity realizing within the next year?",
                     "type": "text",
                     "triggerOption": "3 long-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-3-3-12",
                     "title": "What is the 3 long-term financial opportunity relation in Climate change mitigation?",
                     "type": "text",
                     "triggerOption": "3 long-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-3-3-13",
                     "title": "Give a title to the financial opportunity. ",
                     "type": "text",
                     "triggerOption": "3 long-term opportunity",
                     "required": true,
                     "description": "Please keep the opportunity title concise"
                  },
                  {
                     "id": "q7-opt-3-3-14",
                     "title": "Based on the chosen financial threshold, what is the magnitude of the 3 long-term opportunity?",
                     "type": "multiple-choice",
                     "triggerOption": "3 long-term opportunity",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Insignificant" },
                        { "id": "opt2", "text": "Negligible" },
                        { "id": "opt3", "text": "Moderate" },
                        { "id": "opt4", "text": "Externsive" },
                        { "id": "opt5", "text": "Significant" }
                     ]
                  },
                  {
                     "id": "q7-opt-3-3-15",
                     "title": "What is the potential likelihood of these 3 long-term financial opportunity realizing in the next two to five years?",
                     "type": "multiple-choice",
                     "triggerOption": "3 long-term opportunity",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very low" },
                        { "id": "opt2", "text": "Low" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "High" },
                        { "id": "opt5", "text": "Very High" }
                     ]
                  },
                  {
                     "id": "q7-opt-3-3-16",
                     "title": "Third Long Term Financial opportunity – Score",
                     "type": "text",
                     "triggerOption": "3 long-term opportunity",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q7-opt-3-3-17",
                     "title": "Describe the third long-term financial opportunity in detail.",
                     "type": "text",
                     "triggerOption": "3 long-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-3-3-18",
                     "title": "What is the threshold chosen by your financial experts of assessing the materiality of 3 long-term financial opportunities?",
                     "type": "text",
                     "triggerOption": "3 long-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-3-3-19",
                     "title": "How do you assess the likelihood of this 3 long-term financial opportunity realizing within the next year?",
                     "type": "text",
                     "triggerOption": "3 long-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-3-3-20",
                     "title": "What is the 3 long-term financial opportunity relation in Climate change mitigation?",
                     "type": "text",
                     "triggerOption": "3 long-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-3-3-21",
                     "title": "Give a title to the financial opportunity. ",
                     "type": "text",
                     "triggerOption": "3 long-term opportunity",
                     "required": true,
                     "description": "Please keep the opportunity title concise"
                  },
                  {
                     "id": "q7-opt-3-3-22",
                     "title": "Based on the chosen financial threshold, what is the magnitude of the 3 long-term opportunity?",
                     "type": "multiple-choice",
                     "triggerOption": "3 long-term opportunity",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Insignificant" },
                        { "id": "opt2", "text": "Negligible" },
                        { "id": "opt3", "text": "Moderate" },
                        { "id": "opt4", "text": "Externsive" },
                        { "id": "opt5", "text": "Significant" }
                     ]
                  },
                  {
                     "id": "q7-opt-3-3-23",
                     "title": "What is the potential likelihood of these 3 long-term financial opportunity realizing in the next two to five years?",
                     "type": "multiple-choice",
                     "triggerOption": "3 long-term opportunity",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very low" },
                        { "id": "opt2", "text": "Low" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "High" },
                        { "id": "opt5", "text": "Very High" }
                     ]
                  },
                  {
                     "id": "q7-opt-3-3-24",
                     "title": "Third Long Term Financial opportunity – Score",
                     "type": "text",
                     "triggerOption": "3 long-term opportunity",
                     "required": true,
                     "description": "END"
                  },
               ],
            },
         ],
      },
   ]
  },
  {
    id: 'climate_change_adaptation',
    topic: 'Environment',
    title: 'Climate Change Adaptation',
    questions: [
      {
         "id": "q1",
         "title": "Please elaborate why this sub-topic is considered relevant for your company.",
         "type": "text",
         "required": true,
         "description": "The sub-topic is relevant to your business line and does not necessarily need to be material. Materiality will be determined by the outcome of the following questions."
      },
      {
         "id": "q2",
         "title": "Where in your supply chain is this sub-topic of relevance?",
         "type": "multiple-choice",
         "required": true,
         "options": [
            { "id": "opt1", "text": "Upstream value chain" },
            { "id": "opt2", "text": "Own operations" },
            { "id": "opt3", "text": "Downstream value chain" }
         ]
      },
      {
         "id": "q3",
         "title": "Did stakeholders provide any insights for this sub-topic?",
         "type": "multiple-choice",
         "required": true,
         "options": [
            { "id": "opt1", "text": "Yes, at least one stakeholder provided insights for this sub-topic." },
            { "id": "opt2", "text": "No, stakeholders did not provide insights for this sub-topic." }
         ]
      },
      {
         "id": "q4",
         "title": "What insights did the stakeholder(s) provide and how was this information gathered?",
         "type": "text",
         "required": false,
         "description": "This information can be associated with impacts, risks or opportunities."
      },
      {
         "id": "q5",
         "title": "What impact categories, related to Climate change adaptation are applicable to your company?",
         "type": "multiple-choice",
         "required": true,
         "options": [
            { "id": "opt1", "text": "An actual negative impact" },
            { "id": "opt2", "text": "A potential negative impact" },
            { "id": "opt3", "text": "An actual positive impact" },
            { "id": "opt4", "text": "A potential positive impact" },
            { "id": "opt5", "text": "None" }
         ],
         subQuestions: [
            {
               "id": "q5-opt-1-1",
               "title": "How many actual negative impacts did your company identify?",
               "type": "multiple-choice",
               "required": true,
               "triggerOption": "An actual negative impact",
               "options": [
                  { "id": "opt1", "text": "1 actual negative impacts" },
                  { "id": "opt2", "text": "2 actual negative impacts" },
                  { "id": "opt3", "text": "3 actual negative impacts" },
               ],
               subQuestions: [
                  {
                     "id": "q5-opt-1-1-1",
                     "title": "Describe the first actual negative impact in detail.",
                     "type": "text",
                     "triggerOption": "1 actual negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-1-1-2",
                     "title": "What is the identified impact?",
                     "type": "text",
                     "triggerOption": "1 actual negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-1-1-3",
                     "title": "Give a title to the identified impact.",
                     "type": "text",
                     "triggerOption": "1 actual negative impacts",
                     "required": true,
                     "description": "Please keep the impact title concise"
                  },
                  {
                     "id": "q5-opt-1-1-4",
                     "title": "Is this impact clearly material without conducting a materiality assessment?",
                     "type": "text",
                     "triggerOption": "1 actual negative impacts",
                     "required": true,
                     "description": "Selecting yes means that this impact will be automatically material. This is useful for sustainability matters that are very clearly linked to your company's operations. Only use this option when this impact is related to your business's core operations.",
                     "options": [
                        { "id": "opt1", "text": "Yes" },
                        { "id": "opt2", "text": "No" }
                     ]
                  },
                  {
                     "id": "q5-opt-1-1-5",
                     "title": "How do you evaluate the scope of actual negative impacts?",
                     "type": "text",
                     "triggerOption": "1 actual negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-1-1-6",
                     "title": "What is the scope of the actual negative impact due to Climate change adaptation?",
                     "type": "multiple-choice",
                     "triggerOption": "1 actual negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt2", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-1-1-7",
                     "title": "How do you evaluate the scope of actual negative impacts?",
                     "type": "text",
                     "triggerOption": "1 actual negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-1-1-8",
                     "title": "What is the scope of the actual negative impact due to Climate change adaptation?",
                     "type": "multiple-choice",
                     "triggerOption": "1 actual negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt2", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-1-1-9",
                     "title": "How do you determine the extent to which these impacts are irreversible or difficult to remediate? ",
                     "type": "text",
                     "triggerOption": "1 actual negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-1-1-10",
                     "title": "What is the magnitude of the irremediability of your company's actual negative impacts related to Climate change adaptation?",
                     "type": "multiple-choice",
                     "triggerOption": "1 actual negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very easy to remedy" },
                        { "id": "opt2", "text": "Relatively easy to remedy short-term" },
                        { "id": "opt3", "text": "Remediable with effort (time & cost)" },
                        { "id": "opt4", "text": "Very difficult to remedy or long-term" },
                        { "id": "opt5", "text": "Non-remediable/irreversible" }
                     ]
                  },
                  {
                     "id": "q5-opt-1-1-11",
                     "title": "Actual Negative Impact - Score",
                     "type": "text",
                     "triggerOption": "1 actual negative impacts",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q5-opt-1-2-1",
                     "title": "Describe the first actual negative impact in detail.",
                     "type": "text",
                     "triggerOption": "2 actual negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-1-2-2",
                     "title": "What is the identified impact?",
                     "type": "text",
                     "triggerOption": "2 actual negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-1-2-3",
                     "title": "Give a title to the identified impact.",
                     "type": "text",
                     "triggerOption": "2 actual negative impacts",
                     "required": true,
                     "description": "Please keep the impact title concise"
                  },
                  {
                     "id": "q5-opt-1-2-4",
                     "title": "Is this impact clearly material without conducting a materiality assessment?",
                     "type": "text",
                     "triggerOption": "2 actual negative impacts",
                     "required": true,
                     "description": "Selecting yes means that this impact will be automatically material. This is useful for sustainability matters that are very clearly linked to your company's operations. Only use this option when this impact is related to your business's core operations.",
                     "options": [
                        { "id": "opt1", "text": "Yes" },
                        { "id": "opt2", "text": "No" }
                     ]
                  },
                  {
                     "id": "q5-opt-1-2-5",
                     "title": "How do you evaluate the scope of actual negative impacts?",
                     "type": "text",
                     "triggerOption": "2 actual negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-1-2-6",
                     "title": "What is the scope of the actual negative impact due to Climate change adaptation?",
                     "type": "multiple-choice",
                     "triggerOption": "2 actual negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt2", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-1-2-7",
                     "title": "How do you evaluate the scope of actual negative impacts?",
                     "type": "text",
                     "triggerOption": "2 actual negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-1-2-8",
                     "title": "What is the scope of the actual negative impact due to Climate change adaptation?",
                     "type": "multiple-choice",
                     "triggerOption": "2 actual negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt2", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-1-2-9",
                     "title": "How do you determine the extent to which these impacts are irreversible or difficult to remediate? ",
                     "type": "text",
                     "triggerOption": "2 actual negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-1-2-10",
                     "title": "What is the magnitude of the irremediability of your company's actual negative impacts related to Climate change adaptation?",
                     "type": "multiple-choice",
                     "triggerOption": "2 actual negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very easy to remedy" },
                        { "id": "opt2", "text": "Relatively easy to remedy short-term" },
                        { "id": "opt3", "text": "Remediable with effort (time & cost)" },
                        { "id": "opt4", "text": "Very difficult to remedy or long-term" },
                        { "id": "opt5", "text": "Non-remediable/irreversible" }
                     ]
                  },
                  {
                     "id": "q5-opt-1-2-11",
                     "title": "Actual Negative Impact - Score",
                     "type": "text",
                     "triggerOption": "2 actual negative impacts",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q5-opt-1-2-12",
                     "title": "Describe the Second actual negative impact in detail.",
                     "type": "text",
                     "triggerOption": "2 actual negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-1-2-13",
                     "title": "What is the identified impact?",
                     "type": "text",
                     "triggerOption": "2 actual negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-1-2-14",
                     "title": "Give a title to the identified impact.",
                     "type": "text",
                     "triggerOption": "2 actual negative impacts",
                     "required": true,
                     "description": "Please keep the impact title concise"
                  },
                  {
                     "id": "q5-opt-1-2-15",
                     "title": "Is this impact clearly material without conducting a materiality assessment?",
                     "type": "text",
                     "triggerOption": "2 actual negative impacts",
                     "required": true,
                     "description": "Selecting yes means that this impact will be automatically material. This is useful for sustainability matters that are very clearly linked to your company's operations. Only use this option when this impact is related to your business's core operations.",
                     "options": [
                        { "id": "opt1", "text": "Yes" },
                        { "id": "opt2", "text": "No" }
                     ]
                  },
                  {
                     "id": "q5-opt-1-2-16",
                     "title": "How do you evaluate the scope of actual negative impacts?",
                     "type": "text",
                     "triggerOption": "2 actual negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-1-2-17",
                     "title": "What is the scope of the actual negative impact due to Climate change adaptation?",
                     "type": "multiple-choice",
                     "triggerOption": "2 actual negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt2", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-1-2-18",
                     "title": "How do you evaluate the scope of actual negative impacts?",
                     "type": "text",
                     "triggerOption": "2 actual negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-1-2-19",
                     "title": "What is the scope of the actual negative impact due to Climate change adaptation?",
                     "type": "multiple-choice",
                     "triggerOption": "2 actual negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt2", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-1-2-20",
                     "title": "How do you determine the extent to which these impacts are irreversible or difficult to remediate? ",
                     "type": "text",
                     "triggerOption": "2 actual negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-1-2-21",
                     "title": "What is the magnitude of the irremediability of your company's actual negative impacts related to Climate change adaptation?",
                     "type": "multiple-choice",
                     "triggerOption": "2 actual negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very easy to remedy" },
                        { "id": "opt2", "text": "Relatively easy to remedy short-term" },
                        { "id": "opt3", "text": "Remediable with effort (time & cost)" },
                        { "id": "opt4", "text": "Very difficult to remedy or long-term" },
                        { "id": "opt5", "text": "Non-remediable/irreversible" }
                     ]
                  },
                  {
                     "id": "q5-opt-1-2-22",
                     "title": "Actual Negative Impact - Score",
                     "type": "text",
                     "triggerOption": "2 actual negative impacts",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q5-opt-1-3-1",
                     "title": "Describe the first actual negative impact in detail.",
                     "type": "text",
                     "triggerOption": "3 actual negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-1-3-2",
                     "title": "What is the identified impact?",
                     "type": "text",
                     "triggerOption": "3 actual negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-1-3-3",
                     "title": "Give a title to the identified impact.",
                     "type": "text",
                     "triggerOption": "3 actual negative impacts",
                     "required": true,
                     "description": "Please keep the impact title concise"
                  },
                  {
                     "id": "q5-opt-1-3-4",
                     "title": "Is this impact clearly material without conducting a materiality assessment?",
                     "type": "text",
                     "triggerOption": "3 actual negative impacts",
                     "required": true,
                     "description": "Selecting yes means that this impact will be automatically material. This is useful for sustainability matters that are very clearly linked to your company's operations. Only use this option when this impact is related to your business's core operations.",
                     "options": [
                        { "id": "opt1", "text": "Yes" },
                        { "id": "opt3", "text": "No" }
                     ]
                  },
                  {
                     "id": "q5-opt-1-3-5",
                     "title": "How do you evaluate the scope of actual negative impacts?",
                     "type": "text",
                     "triggerOption": "3 actual negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-1-3-6",
                     "title": "What is the scope of the actual negative impact due to Climate change adaptation?",
                     "type": "multiple-choice",
                     "triggerOption": "3 actual negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt3", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-1-3-7",
                     "title": "How do you evaluate the scope of actual negative impacts?",
                     "type": "text",
                     "triggerOption": "3 actual negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-1-3-8",
                     "title": "What is the scope of the actual negative impact due to Climate change adaptation?",
                     "type": "multiple-choice",
                     "triggerOption": "3 actual negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt3", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-1-3-9",
                     "title": "How do you determine the extent to which these impacts are irreversible or difficult to remediate? ",
                     "type": "text",
                     "triggerOption": "3 actual negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-1-3-10",
                     "title": "What is the magnitude of the irremediability of your company's actual negative impacts related to Climate change adaptation?",
                     "type": "multiple-choice",
                     "triggerOption": "3 actual negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very easy to remedy" },
                        { "id": "opt3", "text": "Relatively easy to remedy short-term" },
                        { "id": "opt3", "text": "Remediable with effort (time & cost)" },
                        { "id": "opt4", "text": "Very difficult to remedy or long-term" },
                        { "id": "opt5", "text": "Non-remediable/irreversible" }
                     ]
                  },
                  {
                     "id": "q5-opt-1-3-11",
                     "title": "Actual Negative Impact - Score",
                     "type": "text",
                     "triggerOption": "3 actual negative impacts",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q5-opt-1-3-12",
                     "title": "Describe the second actual negative impact in detail.",
                     "type": "text",
                     "triggerOption": "3 actual negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-1-3-13",
                     "title": "What is the identified impact?",
                     "type": "text",
                     "triggerOption": "3 actual negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-1-3-14",
                     "title": "Give a title to the identified impact.",
                     "type": "text",
                     "triggerOption": "3 actual negative impacts",
                     "required": true,
                     "description": "Please keep the impact title concise"
                  },
                  {
                     "id": "q5-opt-1-3-15",
                     "title": "Is this impact clearly material without conducting a materiality assessment?",
                     "type": "text",
                     "triggerOption": "3 actual negative impacts",
                     "required": true,
                     "description": "Selecting yes means that this impact will be automatically material. This is useful for sustainability matters that are very clearly linked to your company's operations. Only use this option when this impact is related to your business's core operations.",
                     "options": [
                        { "id": "opt1", "text": "Yes" },
                        { "id": "opt3", "text": "No" }
                     ]
                  },
                  {
                     "id": "q5-opt-1-3-16",
                     "title": "How do you evaluate the scope of actual negative impacts?",
                     "type": "text",
                     "triggerOption": "3 actual negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-1-3-17",
                     "title": "What is the scope of the actual negative impact due to Climate change adaptation?",
                     "type": "multiple-choice",
                     "triggerOption": "3 actual negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt3", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-1-3-18",
                     "title": "How do you evaluate the scope of actual negative impacts?",
                     "type": "text",
                     "triggerOption": "3 actual negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-1-3-19",
                     "title": "What is the scope of the actual negative impact due to Climate change adaptation?",
                     "type": "multiple-choice",
                     "triggerOption": "3 actual negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt3", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-1-3-20",
                     "title": "How do you determine the extent to which these impacts are irreversible or difficult to remediate? ",
                     "type": "text",
                     "triggerOption": "3 actual negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-1-3-21",
                     "title": "What is the magnitude of the irremediability of your company's actual negative impacts related to Climate change adaptation?",
                     "type": "multiple-choice",
                     "triggerOption": "3 actual negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very easy to remedy" },
                        { "id": "opt3", "text": "Relatively easy to remedy short-term" },
                        { "id": "opt3", "text": "Remediable with effort (time & cost)" },
                        { "id": "opt4", "text": "Very difficult to remedy or long-term" },
                        { "id": "opt5", "text": "Non-remediable/irreversible" }
                     ]
                  },
                  {
                     "id": "q5-opt-1-3-22",
                     "title": "Actual Negative Impact - Score",
                     "type": "text",
                     "triggerOption": "3 actual negative impacts",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q5-opt-1-3-23",
                     "title": "Describe the third actual negative impact in detail.",
                     "type": "text",
                     "triggerOption": "3 actual negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-1-3-24",
                     "title": "What is the identified impact?",
                     "type": "text",
                     "triggerOption": "3 actual negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-1-3-25",
                     "title": "Give a title to the identified impact.",
                     "type": "text",
                     "triggerOption": "3 actual negative impacts",
                     "required": true,
                     "description": "Please keep the impact title concise"
                  },
                  {
                     "id": "q5-opt-1-3-26",
                     "title": "Is this impact clearly material without conducting a materiality assessment?",
                     "type": "text",
                     "triggerOption": "3 actual negative impacts",
                     "required": true,
                     "description": "Selecting yes means that this impact will be automatically material. This is useful for sustainability matters that are very clearly linked to your company's operations. Only use this option when this impact is related to your business's core operations.",
                     "options": [
                        { "id": "opt1", "text": "Yes" },
                        { "id": "opt3", "text": "No" }
                     ]
                  },
                  {
                     "id": "q5-opt-1-3-27",
                     "title": "How do you evaluate the scope of actual negative impacts?",
                     "type": "text",
                     "triggerOption": "3 actual negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-1-3-28",
                     "title": "What is the scope of the actual negative impact due to Climate change adaptation?",
                     "type": "multiple-choice",
                     "triggerOption": "3 actual negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt3", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-1-3-29",
                     "title": "How do you evaluate the scope of actual negative impacts?",
                     "type": "text",
                     "triggerOption": "3 actual negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-1-3-30",
                     "title": "What is the scope of the actual negative impact due to Climate change adaptation?",
                     "type": "multiple-choice",
                     "triggerOption": "3 actual negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt3", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-1-3-31",
                     "title": "How do you determine the extent to which these impacts are irreversible or difficult to remediate? ",
                     "type": "text",
                     "triggerOption": "3 actual negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-1-3-32",
                     "title": "What is the magnitude of the irremediability of your company's actual negative impacts related to Climate change adaptation?",
                     "type": "multiple-choice",
                     "triggerOption": "3 actual negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very easy to remedy" },
                        { "id": "opt3", "text": "Relatively easy to remedy short-term" },
                        { "id": "opt3", "text": "Remediable with effort (time & cost)" },
                        { "id": "opt4", "text": "Very difficult to remedy or long-term" },
                        { "id": "opt5", "text": "Non-remediable/irreversible" }
                     ]
                  },
                  {
                     "id": "q5-opt-1-3-33",
                     "title": "Actual Negative Impact - Score",
                     "type": "text",
                     "triggerOption": "3 actual negative impacts",
                     "required": true,
                     "description": "END"
                  },
               ],
            },
            {
               "id": "q5-opt-2-1",
               "title": "How many potential negative impacts did your company identify?",
               "type": "multiple-choice",
               "required": true,
               "triggerOption": "An potential negative impact",
               "options": [
                  { "id": "opt1", "text": "1 potential negative impacts" },
                  { "id": "opt2", "text": "2 potential negative impacts" },
                  { "id": "opt3", "text": "3 potential negative impacts" },
               ],
               subQuestions: [
                  {
                     "id": "q5-opt-2-1-1",
                     "title": "Describe the first potential negative impact in detail.",
                     "type": "text",
                     "triggerOption": "1 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-1-2",
                     "title": "What is the identified impact?",
                     "type": "text",
                     "triggerOption": "1 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-1-3",
                     "title": "Give a title to the identified impact.",
                     "type": "text",
                     "triggerOption": "1 potential negative impacts",
                     "required": true,
                     "description": "Please keep the impact title concise"
                  },
                  {
                     "id": "q5-opt-2-1-4",
                     "title": "Is this impact clearly material without conducting a materiality assessment?",
                     "type": "text",
                     "triggerOption": "1 potential negative impacts",
                     "required": true,
                     "description": "Selecting yes means that this impact will be automatically material. This is useful for sustainability matters that are very clearly linked to your company's operations. Only use this option when this impact is related to your business's core operations.",
                     "options": [
                        { "id": "opt1", "text": "Yes" },
                        { "id": "opt2", "text": "No" }
                     ]
                  },
                  {
                     "id": "q5-opt-2-1-5",
                     "title": "How do you evaluate the scope of potential negative impacts?",
                     "type": "text",
                     "triggerOption": "1 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-1-6",
                     "title": "What is the scope of the potential negative impact due to Climate change adaptation?",
                     "type": "multiple-choice",
                     "triggerOption": "1 potential negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt2", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-2-1-7",
                     "title": "How do you evaluate the scope of potential negative impacts?",
                     "type": "text",
                     "triggerOption": "1 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-1-8",
                     "title": "What is the scope of the potential negative impact due to Climate change adaptation?",
                     "type": "multiple-choice",
                     "triggerOption": "1 potential negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt2", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-2-1-9",
                     "title": "How do you determine the extent to which these impacts are irreversible or difficult to remediate? ",
                     "type": "text",
                     "triggerOption": "1 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-1-10",
                     "title": "What is the magnitude of the irremediability of your company's potential negative impacts related to Climate change adaptation?",
                     "type": "multiple-choice",
                     "triggerOption": "1 potential negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very easy to remedy" },
                        { "id": "opt2", "text": "Relatively easy to remedy short-term" },
                        { "id": "opt3", "text": "Remediable with effort (time & cost)" },
                        { "id": "opt4", "text": "Very difficult to remedy or long-term" },
                        { "id": "opt5", "text": "Non-remediable/irreversible" }
                     ]
                  },
                  {
                     "id": "q5-opt-2-1-11",
                     "title": "Does the impact relate to human rights?",
                     "type": "text",
                     "triggerOption": "1 potential negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Yes" },
                        { "id": "opt2", "text": "No" }
                     ]
                  },
                  {
                     "id": "q5-opt-2-1-12",
                     "title": "What criteria does your company use to estimate the likelihood and timelines for potential negative impacts related to climate change adaptation?",
                     "type": "text",
                     "triggerOption": "1 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-1-13",
                     "title": "What criteria does your company use to estimate the likelihood and timelines for potential negative impacts related to climate change adaptation?",
                     "type": "text",
                     "triggerOption": "1 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-1-14",
                     "title": "What is the potential likelihood of these negative impacts to occur within a given period?",
                     "type": "multiple-choice",
                     "triggerOption": "1 potential negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very unlikely" },
                        { "id": "opt2", "text": "Unlikely" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Likely" },
                        { "id": "opt5", "text": "Highly likely" }
                     ]
                  },
                  {
                     "id": "q5-opt-2-1-15",
                     "title": "potential negative Impact - Score",
                     "type": "text",
                     "triggerOption": "1 potential negative impacts",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q5-opt-2-2-1",
                     "title": "Describe the first potential negative impact in detail.",
                     "type": "text",
                     "triggerOption": "2 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-2-2",
                     "title": "What is the identified impact?",
                     "type": "text",
                     "triggerOption": "2 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-2-3",
                     "title": "Give a title to the identified impact.",
                     "type": "text",
                     "triggerOption": "2 potential negative impacts",
                     "required": true,
                     "description": "Please keep the impact title concise"
                  },
                  {
                     "id": "q5-opt-2-2-4",
                     "title": "Is this impact clearly material without conducting a materiality assessment?",
                     "type": "text",
                     "triggerOption": "2 potential negative impacts",
                     "required": true,
                     "description": "Selecting yes means that this impact will be automatically material. This is useful for sustainability matters that are very clearly linked to your company's operations. Only use this option when this impact is related to your business's core operations.",
                     "options": [
                        { "id": "opt1", "text": "Yes" },
                        { "id": "opt2", "text": "No" }
                     ]
                  },
                  {
                     "id": "q5-opt-2-2-5",
                     "title": "How do you evaluate the scope of potential negative impacts?",
                     "type": "text",
                     "triggerOption": "2 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-2-6",
                     "title": "What is the scope of the potential negative impact due to Climate change adaptation?",
                     "type": "multiple-choice",
                     "triggerOption": "2 potential negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt2", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-2-2-7",
                     "title": "How do you evaluate the scope of potential negative impacts?",
                     "type": "text",
                     "triggerOption": "2 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-2-8",
                     "title": "What is the scope of the potential negative impact due to Climate change adaptation?",
                     "type": "multiple-choice",
                     "triggerOption": "2 potential negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt2", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-2-2-9",
                     "title": "How do you determine the extent to which these impacts are irreversible or difficult to remediate? ",
                     "type": "text",
                     "triggerOption": "2 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-2-10",
                     "title": "What is the magnitude of the irremediability of your company's potential negative impacts related to Climate change adaptation?",
                     "type": "multiple-choice",
                     "triggerOption": "2 potential negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very easy to remedy" },
                        { "id": "opt2", "text": "Relatively easy to remedy short-term" },
                        { "id": "opt3", "text": "Remediable with effort (time & cost)" },
                        { "id": "opt4", "text": "Very difficult to remedy or long-term" },
                        { "id": "opt5", "text": "Non-remediable/irreversible" }
                     ]
                  },
                  {
                     "id": "q5-opt-2-2-11",
                     "title": "Does the impact relate to human rights?",
                     "type": "text",
                     "triggerOption": "2 potential negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Yes" },
                        { "id": "opt2", "text": "No" }
                     ]
                  },
                  {
                     "id": "q5-opt-2-2-12",
                     "title": "What criteria does your company use to estimate the likelihood and timelines for potential negative impacts related to climate change adaptation?",
                     "type": "text",
                     "triggerOption": "2 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-2-13",
                     "title": "What criteria does your company use to estimate the likelihood and timelines for potential negative impacts related to climate change adaptation?",
                     "type": "text",
                     "triggerOption": "2 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-2-14",
                     "title": "What is the potential likelihood of these negative impacts to occur within a given period?",
                     "type": "multiple-choice",
                     "triggerOption": "2 potential negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very unlikely" },
                        { "id": "opt2", "text": "Unlikely" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Likely" },
                        { "id": "opt5", "text": "Highly likely" }
                     ]
                  },
                  {
                     "id": "q5-opt-2-2-15",
                     "title": "potential negative Impact - Score",
                     "type": "text",
                     "triggerOption": "2 potential negative impacts",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q5-opt-2-2-16",
                     "title": "Describe the first potential negative impact in detail.",
                     "type": "text",
                     "triggerOption": "2 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-2-17",
                     "title": "What is the identified impact?",
                     "type": "text",
                     "triggerOption": "2 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-2-18",
                     "title": "Give a title to the identified impact.",
                     "type": "text",
                     "triggerOption": "2 potential negative impacts",
                     "required": true,
                     "description": "Please keep the impact title concise"
                  },
                  {
                     "id": "q5-opt-2-2-19",
                     "title": "Is this impact clearly material without conducting a materiality assessment?",
                     "type": "text",
                     "triggerOption": "2 potential negative impacts",
                     "required": true,
                     "description": "Selecting yes means that this impact will be automatically material. This is useful for sustainability matters that are very clearly linked to your company's operations. Only use this option when this impact is related to your business's core operations.",
                     "options": [
                        { "id": "opt1", "text": "Yes" },
                        { "id": "opt2", "text": "No" }
                     ]
                  },
                  {
                     "id": "q5-opt-2-2-20",
                     "title": "How do you evaluate the scope of potential negative impacts?",
                     "type": "text",
                     "triggerOption": "2 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-2-21",
                     "title": "What is the scope of the potential negative impact due to Climate change adaptation?",
                     "type": "multiple-choice",
                     "triggerOption": "2 potential negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt2", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-2-2-22",
                     "title": "How do you evaluate the scope of potential negative impacts?",
                     "type": "text",
                     "triggerOption": "2 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-2-23",
                     "title": "What is the scope of the potential negative impact due to Climate change adaptation?",
                     "type": "multiple-choice",
                     "triggerOption": "2 potential negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt2", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-2-2-24",
                     "title": "How do you determine the extent to which these impacts are irreversible or difficult to remediate? ",
                     "type": "text",
                     "triggerOption": "2 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-2-25",
                     "title": "What is the magnitude of the irremediability of your company's potential negative impacts related to Climate change adaptation?",
                     "type": "multiple-choice",
                     "triggerOption": "2 potential negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very easy to remedy" },
                        { "id": "opt2", "text": "Relatively easy to remedy short-term" },
                        { "id": "opt3", "text": "Remediable with effort (time & cost)" },
                        { "id": "opt4", "text": "Very difficult to remedy or long-term" },
                        { "id": "opt5", "text": "Non-remediable/irreversible" }
                     ]
                  },
                  {
                     "id": "q5-opt-2-2-26",
                     "title": "Does the impact relate to human rights?",
                     "type": "text",
                     "triggerOption": "2 potential negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Yes" },
                        { "id": "opt2", "text": "No" }
                     ]
                  },
                  {
                     "id": "q5-opt-2-2-27",
                     "title": "What criteria does your company use to estimate the likelihood and timelines for potential negative impacts related to climate change adaptation?",
                     "type": "text",
                     "triggerOption": "2 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-2-28",
                     "title": "What criteria does your company use to estimate the likelihood and timelines for potential negative impacts related to climate change adaptation?",
                     "type": "text",
                     "triggerOption": "2 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-2-29",
                     "title": "What is the potential likelihood of these negative impacts to occur within a given period?",
                     "type": "multiple-choice",
                     "triggerOption": "2 potential negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very unlikely" },
                        { "id": "opt2", "text": "Unlikely" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Likely" },
                        { "id": "opt5", "text": "Highly likely" }
                     ]
                  },
                  {
                     "id": "q5-opt-2-2-30",
                     "title": "potential negative Impact - Score",
                     "type": "text",
                     "triggerOption": "2 potential negative impacts",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q5-opt-2-3-1",
                     "title": "Describe the first potential negative impact in detail.",
                     "type": "text",
                     "triggerOption": "3 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-3-2",
                     "title": "What is the identified impact?",
                     "type": "text",
                     "triggerOption": "3 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-3-3",
                     "title": "Give a title to the identified impact.",
                     "type": "text",
                     "triggerOption": "3 potential negative impacts",
                     "required": true,
                     "description": "Please keep the impact title concise"
                  },
                  {
                     "id": "q5-opt-2-3-4",
                     "title": "Is this impact clearly material without conducting a materiality assessment?",
                     "type": "text",
                     "triggerOption": "3 potential negative impacts",
                     "required": true,
                     "description": "Selecting yes means that this impact will be automatically material. This is useful for sustainability matters that are very clearly linked to your company's operations. Only use this option when this impact is related to your business's core operations.",
                     "options": [
                        { "id": "opt1", "text": "Yes" },
                        { "id": "opt2", "text": "No" }
                     ]
                  },
                  {
                     "id": "q5-opt-2-3-5",
                     "title": "How do you evaluate the scope of potential negative impacts?",
                     "type": "text",
                     "triggerOption": "3 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-3-6",
                     "title": "What is the scope of the potential negative impact due to Climate change adaptation?",
                     "type": "multiple-choice",
                     "triggerOption": "3 potential negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt2", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-2-3-7",
                     "title": "How do you evaluate the scope of potential negative impacts?",
                     "type": "text",
                     "triggerOption": "3 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-3-8",
                     "title": "What is the scope of the potential negative impact due to Climate change adaptation?",
                     "type": "multiple-choice",
                     "triggerOption": "3 potential negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt2", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-2-3-9",
                     "title": "How do you determine the extent to which these impacts are irreversible or difficult to remediate? ",
                     "type": "text",
                     "triggerOption": "3 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-3-10",
                     "title": "What is the magnitude of the irremediability of your company's potential negative impacts related to Climate change adaptation?",
                     "type": "multiple-choice",
                     "triggerOption": "3 potential negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very easy to remedy" },
                        { "id": "opt2", "text": "Relatively easy to remedy short-term" },
                        { "id": "opt3", "text": "Remediable with effort (time & cost)" },
                        { "id": "opt4", "text": "Very difficult to remedy or long-term" },
                        { "id": "opt5", "text": "Non-remediable/irreversible" }
                     ]
                  },
                  {
                     "id": "q5-opt-2-3-11",
                     "title": "Does the impact relate to human rights?",
                     "type": "text",
                     "triggerOption": "3 potential negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Yes" },
                        { "id": "opt2", "text": "No" }
                     ]
                  },
                  {
                     "id": "q5-opt-2-3-12",
                     "title": "What criteria does your company use to estimate the likelihood and timelines for potential negative impacts related to climate change adaptation?",
                     "type": "text",
                     "triggerOption": "3 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-3-13",
                     "title": "What criteria does your company use to estimate the likelihood and timelines for potential negative impacts related to climate change adaptation?",
                     "type": "text",
                     "triggerOption": "3 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-3-14",
                     "title": "What is the potential likelihood of these negative impacts to occur within a given period?",
                     "type": "multiple-choice",
                     "triggerOption": "3 potential negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very unlikely" },
                        { "id": "opt2", "text": "Unlikely" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Likely" },
                        { "id": "opt5", "text": "Highly likely" }
                     ]
                  },
                  {
                     "id": "q5-opt-2-3-15",
                     "title": "potential negative Impact - Score",
                     "type": "text",
                     "triggerOption": "3 potential negative impacts",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q5-opt-2-3-16",
                     "title": "Describe the first potential negative impact in detail.",
                     "type": "text",
                     "triggerOption": "3 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-3-17",
                     "title": "What is the identified impact?",
                     "type": "text",
                     "triggerOption": "3 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-3-18",
                     "title": "Give a title to the identified impact.",
                     "type": "text",
                     "triggerOption": "3 potential negative impacts",
                     "required": true,
                     "description": "Please keep the impact title concise"
                  },
                  {
                     "id": "q5-opt-2-3-19",
                     "title": "Is this impact clearly material without conducting a materiality assessment?",
                     "type": "text",
                     "triggerOption": "3 potential negative impacts",
                     "required": true,
                     "description": "Selecting yes means that this impact will be automatically material. This is useful for sustainability matters that are very clearly linked to your company's operations. Only use this option when this impact is related to your business's core operations.",
                     "options": [
                        { "id": "opt1", "text": "Yes" },
                        { "id": "opt2", "text": "No" }
                     ]
                  },
                  {
                     "id": "q5-opt-2-3-20",
                     "title": "How do you evaluate the scope of potential negative impacts?",
                     "type": "text",
                     "triggerOption": "3 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-3-21",
                     "title": "What is the scope of the potential negative impact due to Climate change adaptation?",
                     "type": "multiple-choice",
                     "triggerOption": "3 potential negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt2", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-2-3-22",
                     "title": "How do you evaluate the scope of potential negative impacts?",
                     "type": "text",
                     "triggerOption": "3 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-3-23",
                     "title": "What is the scope of the potential negative impact due to Climate change adaptation?",
                     "type": "multiple-choice",
                     "triggerOption": "3 potential negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt2", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-2-3-24",
                     "title": "How do you determine the extent to which these impacts are irreversible or difficult to remediate? ",
                     "type": "text",
                     "triggerOption": "3 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-3-25",
                     "title": "What is the magnitude of the irremediability of your company's potential negative impacts related to Climate change adaptation?",
                     "type": "multiple-choice",
                     "triggerOption": "3 potential negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very easy to remedy" },
                        { "id": "opt2", "text": "Relatively easy to remedy short-term" },
                        { "id": "opt3", "text": "Remediable with effort (time & cost)" },
                        { "id": "opt4", "text": "Very difficult to remedy or long-term" },
                        { "id": "opt5", "text": "Non-remediable/irreversible" }
                     ]
                  },
                  {
                     "id": "q5-opt-2-3-26",
                     "title": "Does the impact relate to human rights?",
                     "type": "text",
                     "triggerOption": "3 potential negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Yes" },
                        { "id": "opt2", "text": "No" }
                     ]
                  },
                  {
                     "id": "q5-opt-2-3-27",
                     "title": "What criteria does your company use to estimate the likelihood and timelines for potential negative impacts related to climate change adaptation?",
                     "type": "text",
                     "triggerOption": "3 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-3-28",
                     "title": "What criteria does your company use to estimate the likelihood and timelines for potential negative impacts related to climate change adaptation?",
                     "type": "text",
                     "triggerOption": "3 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-3-29",
                     "title": "What is the potential likelihood of these negative impacts to occur within a given period?",
                     "type": "multiple-choice",
                     "triggerOption": "3 potential negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very unlikely" },
                        { "id": "opt2", "text": "Unlikely" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Likely" },
                        { "id": "opt5", "text": "Highly likely" }
                     ]
                  },
                  {
                     "id": "q5-opt-2-3-30",
                     "title": "potential negative Impact - Score",
                     "type": "text",
                     "triggerOption": "3 potential negative impacts",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q5-opt-2-3-31",
                     "title": "Describe the first potential negative impact in detail.",
                     "type": "text",
                     "triggerOption": "3 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-3-32",
                     "title": "What is the identified impact?",
                     "type": "text",
                     "triggerOption": "3 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-3-33",
                     "title": "Give a title to the identified impact.",
                     "type": "text",
                     "triggerOption": "3 potential negative impacts",
                     "required": true,
                     "description": "Please keep the impact title concise"
                  },
                  {
                     "id": "q5-opt-2-3-34",
                     "title": "Is this impact clearly material without conducting a materiality assessment?",
                     "type": "text",
                     "triggerOption": "3 potential negative impacts",
                     "required": true,
                     "description": "Selecting yes means that this impact will be automatically material. This is useful for sustainability matters that are very clearly linked to your company's operations. Only use this option when this impact is related to your business's core operations.",
                     "options": [
                        { "id": "opt1", "text": "Yes" },
                        { "id": "opt2", "text": "No" }
                     ]
                  },
                  {
                     "id": "q5-opt-2-3-35",
                     "title": "How do you evaluate the scope of potential negative impacts?",
                     "type": "text",
                     "triggerOption": "3 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-3-36",
                     "title": "What is the scope of the potential negative impact due to Climate change adaptation?",
                     "type": "multiple-choice",
                     "triggerOption": "3 potential negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt2", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-2-3-37",
                     "title": "How do you evaluate the scope of potential negative impacts?",
                     "type": "text",
                     "triggerOption": "3 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-3-38",
                     "title": "What is the scope of the potential negative impact due to Climate change adaptation?",
                     "type": "multiple-choice",
                     "triggerOption": "3 potential negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt2", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-2-3-39",
                     "title": "How do you determine the extent to which these impacts are irreversible or difficult to remediate? ",
                     "type": "text",
                     "triggerOption": "3 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-3-40",
                     "title": "What is the magnitude of the irremediability of your company's potential negative impacts related to Climate change adaptation?",
                     "type": "multiple-choice",
                     "triggerOption": "3 potential negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very easy to remedy" },
                        { "id": "opt2", "text": "Relatively easy to remedy short-term" },
                        { "id": "opt3", "text": "Remediable with effort (time & cost)" },
                        { "id": "opt4", "text": "Very difficult to remedy or long-term" },
                        { "id": "opt5", "text": "Non-remediable/irreversible" }
                     ]
                  },
                  {
                     "id": "q5-opt-2-3-41",
                     "title": "Does the impact relate to human rights?",
                     "type": "text",
                     "triggerOption": "3 potential negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Yes" },
                        { "id": "opt2", "text": "No" }
                     ]
                  },
                  {
                     "id": "q5-opt-2-3-42",
                     "title": "What criteria does your company use to estimate the likelihood and timelines for potential negative impacts related to climate change adaptation?",
                     "type": "text",
                     "triggerOption": "3 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-3-43",
                     "title": "What criteria does your company use to estimate the likelihood and timelines for potential negative impacts related to climate change adaptation?",
                     "type": "text",
                     "triggerOption": "3 potential negative impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-2-3-44",
                     "title": "What is the potential likelihood of these negative impacts to occur within a given period?",
                     "type": "multiple-choice",
                     "triggerOption": "3 potential negative impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very unlikely" },
                        { "id": "opt2", "text": "Unlikely" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Likely" },
                        { "id": "opt5", "text": "Highly likely" }
                     ]
                  },
                  {
                     "id": "q5-opt-2-3-45",
                     "title": "potential negative Impact - Score",
                     "type": "text",
                     "triggerOption": "3 potential negative impacts",
                     "required": true,
                     "description": "END"
                  },
               ],
            },
            {
               "id": "q5-opt-3-1",
               "title": "How many actual positive impacts did your company identify?",
               "type": "multiple-choice",
               "required": true,
               "triggerOption": "An actual positive impact",
               "options": [
                  { "id": "opt1", "text": "1 actual positive impacts" },
                  { "id": "opt2", "text": "2 actual positive impacts" },
                  { "id": "opt3", "text": "3 actual positive impacts" },
               ],
               subQuestions: [
                  {
                     "id": "q5-opt-3-1-1",
                     "title": "Describe the first actual positive impact in detail.",
                     "type": "text",
                     "triggerOption": "1 actual positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-3-1-2",
                     "title": "What is the identified impact?",
                     "type": "text",
                     "triggerOption": "1 actual positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-3-1-3",
                     "title": "Give a title to the identified impact.",
                     "type": "text",
                     "triggerOption": "1 actual positive impacts",
                     "required": true,
                     "description": "Please keep the impact title concise"
                  },
                  {
                     "id": "q5-opt-3-1-4",
                     "title": "Is this impact clearly material without conducting a materiality assessment?",
                     "type": "text",
                     "triggerOption": "1 actual positive impacts",
                     "required": true,
                     "description": "Selecting yes means that this impact will be automatically material. This is useful for sustainability matters that are very clearly linked to your company's operations. Only use this option when this impact is related to your business's core operations.",
                     "options": [
                        { "id": "opt1", "text": "Yes" },
                        { "id": "opt2", "text": "No" }
                     ]
                  },
                  {
                     "id": "q5-opt-3-1-5",
                     "title": "How do you evaluate the scope of actual positive impacts?",
                     "type": "text",
                     "triggerOption": "1 actual positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-3-1-6",
                     "title": "What is the scope of the actual positive impact due to Climate change adaptation?",
                     "type": "multiple-choice",
                     "triggerOption": "1 actual positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt2", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-3-1-7",
                     "title": "How do you evaluate the scope of actual positive impacts?",
                     "type": "text",
                     "triggerOption": "1 actual positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-3-1-8",
                     "title": "What is the scope of the actual positive impact due to Climate change adaptation?",
                     "type": "multiple-choice",
                     "triggerOption": "1 actual positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt2", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-3-1-9",
                     "title": "How do you determine the extent to which these impacts are irreversible or difficult to remediate? ",
                     "type": "text",
                     "triggerOption": "1 actual positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-3-1-10",
                     "title": "What is the magnitude of the irremediability of your company's actual positive impacts related to Climate change adaptation?",
                     "type": "multiple-choice",
                     "triggerOption": "1 actual positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very easy to remedy" },
                        { "id": "opt2", "text": "Relatively easy to remedy short-term" },
                        { "id": "opt3", "text": "Remediable with effort (time & cost)" },
                        { "id": "opt4", "text": "Very difficult to remedy or long-term" },
                        { "id": "opt5", "text": "Non-remediable/irreversible" }
                     ]
                  },
                  {
                     "id": "q5-opt-3-1-11",
                     "title": "actual positive Impact - Score",
                     "type": "text",
                     "triggerOption": "1 actual positive impacts",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q5-opt-3-2-1",
                     "title": "Describe the first actual positive impact in detail.",
                     "type": "text",
                     "triggerOption": "2 actual positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-3-2-2",
                     "title": "What is the identified impact?",
                     "type": "text",
                     "triggerOption": "2 actual positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-3-2-3",
                     "title": "Give a title to the identified impact.",
                     "type": "text",
                     "triggerOption": "2 actual positive impacts",
                     "required": true,
                     "description": "Please keep the impact title concise"
                  },
                  {
                     "id": "q5-opt-3-2-4",
                     "title": "Is this impact clearly material without conducting a materiality assessment?",
                     "type": "text",
                     "triggerOption": "2 actual positive impacts",
                     "required": true,
                     "description": "Selecting yes means that this impact will be automatically material. This is useful for sustainability matters that are very clearly linked to your company's operations. Only use this option when this impact is related to your business's core operations.",
                     "options": [
                        { "id": "opt1", "text": "Yes" },
                        { "id": "opt2", "text": "No" }
                     ]
                  },
                  {
                     "id": "q5-opt-3-2-5",
                     "title": "How do you evaluate the scope of actual positive impacts?",
                     "type": "text",
                     "triggerOption": "2 actual positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-3-2-6",
                     "title": "What is the scope of the actual positive impact due to Climate change adaptation?",
                     "type": "multiple-choice",
                     "triggerOption": "2 actual positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt2", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-3-2-7",
                     "title": "How do you evaluate the scope of actual positive impacts?",
                     "type": "text",
                     "triggerOption": "2 actual positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-3-2-8",
                     "title": "What is the scope of the actual positive impact due to Climate change adaptation?",
                     "type": "multiple-choice",
                     "triggerOption": "2 actual positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt2", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-3-2-9",
                     "title": "How do you determine the extent to which these impacts are irreversible or difficult to remediate? ",
                     "type": "text",
                     "triggerOption": "2 actual positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-3-2-10",
                     "title": "What is the magnitude of the irremediability of your company's actual positive impacts related to Climate change adaptation?",
                     "type": "multiple-choice",
                     "triggerOption": "2 actual positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very easy to remedy" },
                        { "id": "opt2", "text": "Relatively easy to remedy short-term" },
                        { "id": "opt3", "text": "Remediable with effort (time & cost)" },
                        { "id": "opt4", "text": "Very difficult to remedy or long-term" },
                        { "id": "opt5", "text": "Non-remediable/irreversible" }
                     ]
                  },
                  {
                     "id": "q5-opt-3-2-11",
                     "title": "actual positive Impact - Score",
                     "type": "text",
                     "triggerOption": "2 actual positive impacts",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q5-opt-3-2-12",
                     "title": "Describe the Second actual positive impact in detail.",
                     "type": "text",
                     "triggerOption": "2 actual positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-3-2-13",
                     "title": "What is the identified impact?",
                     "type": "text",
                     "triggerOption": "2 actual positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-3-2-14",
                     "title": "Give a title to the identified impact.",
                     "type": "text",
                     "triggerOption": "2 actual positive impacts",
                     "required": true,
                     "description": "Please keep the impact title concise"
                  },
                  {
                     "id": "q5-opt-3-2-15",
                     "title": "Is this impact clearly material without conducting a materiality assessment?",
                     "type": "text",
                     "triggerOption": "2 actual positive impacts",
                     "required": true,
                     "description": "Selecting yes means that this impact will be automatically material. This is useful for sustainability matters that are very clearly linked to your company's operations. Only use this option when this impact is related to your business's core operations.",
                     "options": [
                        { "id": "opt1", "text": "Yes" },
                        { "id": "opt2", "text": "No" }
                     ]
                  },
                  {
                     "id": "q5-opt-3-2-16",
                     "title": "How do you evaluate the scope of actual positive impacts?",
                     "type": "text",
                     "triggerOption": "2 actual positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-3-2-17",
                     "title": "What is the scope of the actual positive impact due to Climate change adaptation?",
                     "type": "multiple-choice",
                     "triggerOption": "2 actual positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt2", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-3-2-18",
                     "title": "How do you evaluate the scope of actual positive impacts?",
                     "type": "text",
                     "triggerOption": "2 actual positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-3-2-19",
                     "title": "What is the scope of the actual positive impact due to Climate change adaptation?",
                     "type": "multiple-choice",
                     "triggerOption": "2 actual positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt2", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-3-2-20",
                     "title": "How do you determine the extent to which these impacts are irreversible or difficult to remediate? ",
                     "type": "text",
                     "triggerOption": "2 actual positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-3-2-21",
                     "title": "What is the magnitude of the irremediability of your company's actual positive impacts related to Climate change adaptation?",
                     "type": "multiple-choice",
                     "triggerOption": "2 actual positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very easy to remedy" },
                        { "id": "opt2", "text": "Relatively easy to remedy short-term" },
                        { "id": "opt3", "text": "Remediable with effort (time & cost)" },
                        { "id": "opt4", "text": "Very difficult to remedy or long-term" },
                        { "id": "opt5", "text": "Non-remediable/irreversible" }
                     ]
                  },
                  {
                     "id": "q5-opt-3-2-22",
                     "title": "actual positive Impact - Score",
                     "type": "text",
                     "triggerOption": "2 actual positive impacts",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q5-opt-3-3-1",
                     "title": "Describe the first actual positive impact in detail.",
                     "type": "text",
                     "triggerOption": "3 actual positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-3-3-2",
                     "title": "What is the identified impact?",
                     "type": "text",
                     "triggerOption": "3 actual positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-3-3-3",
                     "title": "Give a title to the identified impact.",
                     "type": "text",
                     "triggerOption": "3 actual positive impacts",
                     "required": true,
                     "description": "Please keep the impact title concise"
                  },
                  {
                     "id": "q5-opt-3-3-4",
                     "title": "Is this impact clearly material without conducting a materiality assessment?",
                     "type": "text",
                     "triggerOption": "3 actual positive impacts",
                     "required": true,
                     "description": "Selecting yes means that this impact will be automatically material. This is useful for sustainability matters that are very clearly linked to your company's operations. Only use this option when this impact is related to your business's core operations.",
                     "options": [
                        { "id": "opt1", "text": "Yes" },
                        { "id": "opt3", "text": "No" }
                     ]
                  },
                  {
                     "id": "q5-opt-3-3-5",
                     "title": "How do you evaluate the scope of actual positive impacts?",
                     "type": "text",
                     "triggerOption": "3 actual positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-3-3-6",
                     "title": "What is the scope of the actual positive impact due to Climate change adaptation?",
                     "type": "multiple-choice",
                     "triggerOption": "3 actual positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt3", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-3-3-7",
                     "title": "How do you evaluate the scope of actual positive impacts?",
                     "type": "text",
                     "triggerOption": "3 actual positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-3-3-8",
                     "title": "What is the scope of the actual positive impact due to Climate change adaptation?",
                     "type": "multiple-choice",
                     "triggerOption": "3 actual positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt3", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-3-3-9",
                     "title": "How do you determine the extent to which these impacts are irreversible or difficult to remediate? ",
                     "type": "text",
                     "triggerOption": "3 actual positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-3-3-10",
                     "title": "What is the magnitude of the irremediability of your company's actual positive impacts related to Climate change adaptation?",
                     "type": "multiple-choice",
                     "triggerOption": "3 actual positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very easy to remedy" },
                        { "id": "opt3", "text": "Relatively easy to remedy short-term" },
                        { "id": "opt3", "text": "Remediable with effort (time & cost)" },
                        { "id": "opt4", "text": "Very difficult to remedy or long-term" },
                        { "id": "opt5", "text": "Non-remediable/irreversible" }
                     ]
                  },
                  {
                     "id": "q5-opt-3-3-11",
                     "title": "actual positive Impact - Score",
                     "type": "text",
                     "triggerOption": "3 actual positive impacts",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q5-opt-3-3-12",
                     "title": "Describe the second actual positive impact in detail.",
                     "type": "text",
                     "triggerOption": "3 actual positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-3-3-13",
                     "title": "What is the identified impact?",
                     "type": "text",
                     "triggerOption": "3 actual positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-3-3-14",
                     "title": "Give a title to the identified impact.",
                     "type": "text",
                     "triggerOption": "3 actual positive impacts",
                     "required": true,
                     "description": "Please keep the impact title concise"
                  },
                  {
                     "id": "q5-opt-3-3-15",
                     "title": "Is this impact clearly material without conducting a materiality assessment?",
                     "type": "text",
                     "triggerOption": "3 actual positive impacts",
                     "required": true,
                     "description": "Selecting yes means that this impact will be automatically material. This is useful for sustainability matters that are very clearly linked to your company's operations. Only use this option when this impact is related to your business's core operations.",
                     "options": [
                        { "id": "opt1", "text": "Yes" },
                        { "id": "opt3", "text": "No" }
                     ]
                  },
                  {
                     "id": "q5-opt-3-3-16",
                     "title": "How do you evaluate the scope of actual positive impacts?",
                     "type": "text",
                     "triggerOption": "3 actual positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-3-3-17",
                     "title": "What is the scope of the actual positive impact due to Climate change adaptation?",
                     "type": "multiple-choice",
                     "triggerOption": "3 actual positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt3", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-3-3-18",
                     "title": "How do you evaluate the scope of actual positive impacts?",
                     "type": "text",
                     "triggerOption": "3 actual positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-3-3-19",
                     "title": "What is the scope of the actual positive impact due to Climate change adaptation?",
                     "type": "multiple-choice",
                     "triggerOption": "3 actual positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt3", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-3-3-20",
                     "title": "How do you determine the extent to which these impacts are irreversible or difficult to remediate? ",
                     "type": "text",
                     "triggerOption": "3 actual positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-3-3-21",
                     "title": "What is the magnitude of the irremediability of your company's actual positive impacts related to Climate change adaptation?",
                     "type": "multiple-choice",
                     "triggerOption": "3 actual positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very easy to remedy" },
                        { "id": "opt3", "text": "Relatively easy to remedy short-term" },
                        { "id": "opt3", "text": "Remediable with effort (time & cost)" },
                        { "id": "opt4", "text": "Very difficult to remedy or long-term" },
                        { "id": "opt5", "text": "Non-remediable/irreversible" }
                     ]
                  },
                  {
                     "id": "q5-opt-3-3-22",
                     "title": "actual positive Impact - Score",
                     "type": "text",
                     "triggerOption": "3 actual positive impacts",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q5-opt-3-3-23",
                     "title": "Describe the third actual positive impact in detail.",
                     "type": "text",
                     "triggerOption": "3 actual positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-3-3-24",
                     "title": "What is the identified impact?",
                     "type": "text",
                     "triggerOption": "3 actual positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-3-3-25",
                     "title": "Give a title to the identified impact.",
                     "type": "text",
                     "triggerOption": "3 actual positive impacts",
                     "required": true,
                     "description": "Please keep the impact title concise"
                  },
                  {
                     "id": "q5-opt-3-3-26",
                     "title": "Is this impact clearly material without conducting a materiality assessment?",
                     "type": "text",
                     "triggerOption": "3 actual positive impacts",
                     "required": true,
                     "description": "Selecting yes means that this impact will be automatically material. This is useful for sustainability matters that are very clearly linked to your company's operations. Only use this option when this impact is related to your business's core operations.",
                     "options": [
                        { "id": "opt1", "text": "Yes" },
                        { "id": "opt3", "text": "No" }
                     ]
                  },
                  {
                     "id": "q5-opt-3-3-27",
                     "title": "How do you evaluate the scope of actual positive impacts?",
                     "type": "text",
                     "triggerOption": "3 actual positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-3-3-28",
                     "title": "What is the scope of the actual positive impact due to Climate change adaptation?",
                     "type": "multiple-choice",
                     "triggerOption": "3 actual positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt3", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-3-3-29",
                     "title": "How do you evaluate the scope of actual positive impacts?",
                     "type": "text",
                     "triggerOption": "3 actual positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-3-3-30",
                     "title": "What is the scope of the actual positive impact due to Climate change adaptation?",
                     "type": "multiple-choice",
                     "triggerOption": "3 actual positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt3", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-3-3-31",
                     "title": "How do you determine the extent to which these impacts are irreversible or difficult to remediate? ",
                     "type": "text",
                     "triggerOption": "3 actual positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-3-3-32",
                     "title": "What is the magnitude of the irremediability of your company's actual positive impacts related to Climate change adaptation?",
                     "type": "multiple-choice",
                     "triggerOption": "3 actual positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very easy to remedy" },
                        { "id": "opt3", "text": "Relatively easy to remedy short-term" },
                        { "id": "opt3", "text": "Remediable with effort (time & cost)" },
                        { "id": "opt4", "text": "Very difficult to remedy or long-term" },
                        { "id": "opt5", "text": "Non-remediable/irreversible" }
                     ]
                  },
                  {
                     "id": "q5-opt-3-3-33",
                     "title": "actual positive Impact - Score",
                     "type": "text",
                     "triggerOption": "3 actual positive impacts",
                     "required": true,
                     "description": "END"
                  },
               ],
            },
            {
               "id": "q5-opt-4-1",
               "title": "How many potential positive impacts did your company identify?",
               "type": "multiple-choice",
               "required": true,
               "triggerOption": "An potential positive impact",
               "options": [
                  { "id": "opt1", "text": "1 potential positive impacts" },
                  { "id": "opt2", "text": "2 potential positive impacts" },
                  { "id": "opt3", "text": "3 potential positive impacts" },
               ],
               subQuestions: [
                  {
                     "id": "q5-opt-4-1-1",
                     "title": "Describe the first potential positive impact in detail.",
                     "type": "text",
                     "triggerOption": "1 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-1-2",
                     "title": "What is the identified impact?",
                     "type": "text",
                     "triggerOption": "1 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-1-3",
                     "title": "Give a title to the identified impact.",
                     "type": "text",
                     "triggerOption": "1 potential positive impacts",
                     "required": true,
                     "description": "Please keep the impact title concise"
                  },
                  {
                     "id": "q5-opt-4-1-4",
                     "title": "Is this impact clearly material without conducting a materiality assessment?",
                     "type": "text",
                     "triggerOption": "1 potential positive impacts",
                     "required": true,
                     "description": "Selecting yes means that this impact will be automatically material. This is useful for sustainability matters that are very clearly linked to your company's operations. Only use this option when this impact is related to your business's core operations.",
                     "options": [
                        { "id": "opt1", "text": "Yes" },
                        { "id": "opt2", "text": "No" }
                     ]
                  },
                  {
                     "id": "q5-opt-4-1-5",
                     "title": "How do you evaluate the scope of potential positive impacts?",
                     "type": "text",
                     "triggerOption": "1 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-1-6",
                     "title": "What is the scope of the potential positive impact due to Climate change adaptation?",
                     "type": "multiple-choice",
                     "triggerOption": "1 potential positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt2", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-4-1-7",
                     "title": "How do you evaluate the scope of potential positive impacts?",
                     "type": "text",
                     "triggerOption": "1 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-1-8",
                     "title": "What is the scope of the potential positive impact due to Climate change adaptation?",
                     "type": "multiple-choice",
                     "triggerOption": "1 potential positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt2", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-4-1-9",
                     "title": "How do you determine the extent to which these impacts are irreversible or difficult to remediate? ",
                     "type": "text",
                     "triggerOption": "1 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-1-10",
                     "title": "What is the magnitude of the irremediability of your company's potential positive impacts related to Climate change adaptation?",
                     "type": "multiple-choice",
                     "triggerOption": "1 potential positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very easy to remedy" },
                        { "id": "opt2", "text": "Relatively easy to remedy short-term" },
                        { "id": "opt3", "text": "Remediable with effort (time & cost)" },
                        { "id": "opt4", "text": "Very difficult to remedy or long-term" },
                        { "id": "opt5", "text": "Non-remediable/irreversible" }
                     ]
                  },
                  {
                     "id": "q5-opt-4-1-11",
                     "title": "Does the impact relate to human rights?",
                     "type": "text",
                     "triggerOption": "1 potential positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Yes" },
                        { "id": "opt2", "text": "No" }
                     ]
                  },
                  {
                     "id": "q5-opt-4-1-12",
                     "title": "What criteria does your company use to estimate the likelihood and timelines for potential positive impacts related to climate change adaptation?",
                     "type": "text",
                     "triggerOption": "1 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-1-13",
                     "title": "What criteria does your company use to estimate the likelihood and timelines for potential positive impacts related to climate change adaptation?",
                     "type": "text",
                     "triggerOption": "1 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-1-14",
                     "title": "What is the potential likelihood of these positive impacts to occur within a given period?",
                     "type": "multiple-choice",
                     "triggerOption": "1 potential positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very unlikely" },
                        { "id": "opt2", "text": "Unlikely" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Likely" },
                        { "id": "opt5", "text": "Highly likely" }
                     ]
                  },
                  {
                     "id": "q5-opt-4-1-15",
                     "title": "potential positive Impact - Score",
                     "type": "text",
                     "triggerOption": "1 potential positive impacts",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q5-opt-4-2-1",
                     "title": "Describe the first potential positive impact in detail.",
                     "type": "text",
                     "triggerOption": "2 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-2-2",
                     "title": "What is the identified impact?",
                     "type": "text",
                     "triggerOption": "2 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-2-3",
                     "title": "Give a title to the identified impact.",
                     "type": "text",
                     "triggerOption": "2 potential positive impacts",
                     "required": true,
                     "description": "Please keep the impact title concise"
                  },
                  {
                     "id": "q5-opt-4-2-4",
                     "title": "Is this impact clearly material without conducting a materiality assessment?",
                     "type": "text",
                     "triggerOption": "2 potential positive impacts",
                     "required": true,
                     "description": "Selecting yes means that this impact will be automatically material. This is useful for sustainability matters that are very clearly linked to your company's operations. Only use this option when this impact is related to your business's core operations.",
                     "options": [
                        { "id": "opt1", "text": "Yes" },
                        { "id": "opt2", "text": "No" }
                     ]
                  },
                  {
                     "id": "q5-opt-4-2-5",
                     "title": "How do you evaluate the scope of potential positive impacts?",
                     "type": "text",
                     "triggerOption": "2 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-2-6",
                     "title": "What is the scope of the potential positive impact due to Climate change adaptation?",
                     "type": "multiple-choice",
                     "triggerOption": "2 potential positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt2", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-4-2-7",
                     "title": "How do you evaluate the scope of potential positive impacts?",
                     "type": "text",
                     "triggerOption": "2 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-2-8",
                     "title": "What is the scope of the potential positive impact due to Climate change adaptation?",
                     "type": "multiple-choice",
                     "triggerOption": "2 potential positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt2", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-4-2-9",
                     "title": "How do you determine the extent to which these impacts are irreversible or difficult to remediate? ",
                     "type": "text",
                     "triggerOption": "2 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-2-10",
                     "title": "What is the magnitude of the irremediability of your company's potential positive impacts related to Climate change adaptation?",
                     "type": "multiple-choice",
                     "triggerOption": "2 potential positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very easy to remedy" },
                        { "id": "opt2", "text": "Relatively easy to remedy short-term" },
                        { "id": "opt3", "text": "Remediable with effort (time & cost)" },
                        { "id": "opt4", "text": "Very difficult to remedy or long-term" },
                        { "id": "opt5", "text": "Non-remediable/irreversible" }
                     ]
                  },
                  {
                     "id": "q5-opt-4-2-11",
                     "title": "Does the impact relate to human rights?",
                     "type": "text",
                     "triggerOption": "2 potential positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Yes" },
                        { "id": "opt2", "text": "No" }
                     ]
                  },
                  {
                     "id": "q5-opt-4-2-12",
                     "title": "What criteria does your company use to estimate the likelihood and timelines for potential positive impacts related to climate change adaptation?",
                     "type": "text",
                     "triggerOption": "2 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-2-13",
                     "title": "What criteria does your company use to estimate the likelihood and timelines for potential positive impacts related to climate change adaptation?",
                     "type": "text",
                     "triggerOption": "2 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-2-14",
                     "title": "What is the potential likelihood of these positive impacts to occur within a given period?",
                     "type": "multiple-choice",
                     "triggerOption": "2 potential positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very unlikely" },
                        { "id": "opt2", "text": "Unlikely" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Likely" },
                        { "id": "opt5", "text": "Highly likely" }
                     ]
                  },
                  {
                     "id": "q5-opt-4-2-15",
                     "title": "potential positive Impact - Score",
                     "type": "text",
                     "triggerOption": "2 potential positive impacts",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q5-opt-4-2-16",
                     "title": "Describe the first potential positive impact in detail.",
                     "type": "text",
                     "triggerOption": "2 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-2-17",
                     "title": "What is the identified impact?",
                     "type": "text",
                     "triggerOption": "2 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-2-18",
                     "title": "Give a title to the identified impact.",
                     "type": "text",
                     "triggerOption": "2 potential positive impacts",
                     "required": true,
                     "description": "Please keep the impact title concise"
                  },
                  {
                     "id": "q5-opt-4-2-19",
                     "title": "Is this impact clearly material without conducting a materiality assessment?",
                     "type": "text",
                     "triggerOption": "2 potential positive impacts",
                     "required": true,
                     "description": "Selecting yes means that this impact will be automatically material. This is useful for sustainability matters that are very clearly linked to your company's operations. Only use this option when this impact is related to your business's core operations.",
                     "options": [
                        { "id": "opt1", "text": "Yes" },
                        { "id": "opt2", "text": "No" }
                     ]
                  },
                  {
                     "id": "q5-opt-4-2-20",
                     "title": "How do you evaluate the scope of potential positive impacts?",
                     "type": "text",
                     "triggerOption": "2 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-2-21",
                     "title": "What is the scope of the potential positive impact due to Climate change adaptation?",
                     "type": "multiple-choice",
                     "triggerOption": "2 potential positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt2", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-4-2-22",
                     "title": "How do you evaluate the scope of potential positive impacts?",
                     "type": "text",
                     "triggerOption": "2 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-2-23",
                     "title": "What is the scope of the potential positive impact due to Climate change adaptation?",
                     "type": "multiple-choice",
                     "triggerOption": "2 potential positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt2", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-4-2-24",
                     "title": "How do you determine the extent to which these impacts are irreversible or difficult to remediate? ",
                     "type": "text",
                     "triggerOption": "2 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-2-25",
                     "title": "What is the magnitude of the irremediability of your company's potential positive impacts related to Climate change adaptation?",
                     "type": "multiple-choice",
                     "triggerOption": "2 potential positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very easy to remedy" },
                        { "id": "opt2", "text": "Relatively easy to remedy short-term" },
                        { "id": "opt3", "text": "Remediable with effort (time & cost)" },
                        { "id": "opt4", "text": "Very difficult to remedy or long-term" },
                        { "id": "opt5", "text": "Non-remediable/irreversible" }
                     ]
                  },
                  {
                     "id": "q5-opt-4-2-26",
                     "title": "Does the impact relate to human rights?",
                     "type": "text",
                     "triggerOption": "2 potential positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Yes" },
                        { "id": "opt2", "text": "No" }
                     ]
                  },
                  {
                     "id": "q5-opt-4-2-27",
                     "title": "What criteria does your company use to estimate the likelihood and timelines for potential positive impacts related to climate change adaptation?",
                     "type": "text",
                     "triggerOption": "2 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-2-28",
                     "title": "What criteria does your company use to estimate the likelihood and timelines for potential positive impacts related to climate change adaptation?",
                     "type": "text",
                     "triggerOption": "2 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-2-29",
                     "title": "What is the potential likelihood of these positive impacts to occur within a given period?",
                     "type": "multiple-choice",
                     "triggerOption": "2 potential positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very unlikely" },
                        { "id": "opt2", "text": "Unlikely" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Likely" },
                        { "id": "opt5", "text": "Highly likely" }
                     ]
                  },
                  {
                     "id": "q5-opt-4-2-30",
                     "title": "potential positive Impact - Score",
                     "type": "text",
                     "triggerOption": "2 potential positive impacts",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q5-opt-4-3-1",
                     "title": "Describe the first potential positive impact in detail.",
                     "type": "text",
                     "triggerOption": "3 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-3-2",
                     "title": "What is the identified impact?",
                     "type": "text",
                     "triggerOption": "3 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-3-3",
                     "title": "Give a title to the identified impact.",
                     "type": "text",
                     "triggerOption": "3 potential positive impacts",
                     "required": true,
                     "description": "Please keep the impact title concise"
                  },
                  {
                     "id": "q5-opt-4-3-4",
                     "title": "Is this impact clearly material without conducting a materiality assessment?",
                     "type": "text",
                     "triggerOption": "3 potential positive impacts",
                     "required": true,
                     "description": "Selecting yes means that this impact will be automatically material. This is useful for sustainability matters that are very clearly linked to your company's operations. Only use this option when this impact is related to your business's core operations.",
                     "options": [
                        { "id": "opt1", "text": "Yes" },
                        { "id": "opt2", "text": "No" }
                     ]
                  },
                  {
                     "id": "q5-opt-4-3-5",
                     "title": "How do you evaluate the scope of potential positive impacts?",
                     "type": "text",
                     "triggerOption": "3 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-3-6",
                     "title": "What is the scope of the potential positive impact due to Climate change adaptation?",
                     "type": "multiple-choice",
                     "triggerOption": "3 potential positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt2", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-4-3-7",
                     "title": "How do you evaluate the scope of potential positive impacts?",
                     "type": "text",
                     "triggerOption": "3 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-3-8",
                     "title": "What is the scope of the potential positive impact due to Climate change adaptation?",
                     "type": "multiple-choice",
                     "triggerOption": "3 potential positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt2", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-4-3-9",
                     "title": "How do you determine the extent to which these impacts are irreversible or difficult to remediate? ",
                     "type": "text",
                     "triggerOption": "3 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-3-10",
                     "title": "What is the magnitude of the irremediability of your company's potential positive impacts related to Climate change adaptation?",
                     "type": "multiple-choice",
                     "triggerOption": "3 potential positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very easy to remedy" },
                        { "id": "opt2", "text": "Relatively easy to remedy short-term" },
                        { "id": "opt3", "text": "Remediable with effort (time & cost)" },
                        { "id": "opt4", "text": "Very difficult to remedy or long-term" },
                        { "id": "opt5", "text": "Non-remediable/irreversible" }
                     ]
                  },
                  {
                     "id": "q5-opt-4-3-11",
                     "title": "Does the impact relate to human rights?",
                     "type": "text",
                     "triggerOption": "3 potential positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Yes" },
                        { "id": "opt2", "text": "No" }
                     ]
                  },
                  {
                     "id": "q5-opt-4-3-12",
                     "title": "What criteria does your company use to estimate the likelihood and timelines for potential positive impacts related to climate change adaptation?",
                     "type": "text",
                     "triggerOption": "3 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-3-13",
                     "title": "What criteria does your company use to estimate the likelihood and timelines for potential positive impacts related to climate change adaptation?",
                     "type": "text",
                     "triggerOption": "3 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-3-14",
                     "title": "What is the potential likelihood of these positive impacts to occur within a given period?",
                     "type": "multiple-choice",
                     "triggerOption": "3 potential positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very unlikely" },
                        { "id": "opt2", "text": "Unlikely" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Likely" },
                        { "id": "opt5", "text": "Highly likely" }
                     ]
                  },
                  {
                     "id": "q5-opt-4-3-15",
                     "title": "potential positive Impact - Score",
                     "type": "text",
                     "triggerOption": "3 potential positive impacts",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q5-opt-4-3-16",
                     "title": "Describe the first potential positive impact in detail.",
                     "type": "text",
                     "triggerOption": "3 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-3-17",
                     "title": "What is the identified impact?",
                     "type": "text",
                     "triggerOption": "3 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-3-18",
                     "title": "Give a title to the identified impact.",
                     "type": "text",
                     "triggerOption": "3 potential positive impacts",
                     "required": true,
                     "description": "Please keep the impact title concise"
                  },
                  {
                     "id": "q5-opt-4-3-19",
                     "title": "Is this impact clearly material without conducting a materiality assessment?",
                     "type": "text",
                     "triggerOption": "3 potential positive impacts",
                     "required": true,
                     "description": "Selecting yes means that this impact will be automatically material. This is useful for sustainability matters that are very clearly linked to your company's operations. Only use this option when this impact is related to your business's core operations.",
                     "options": [
                        { "id": "opt1", "text": "Yes" },
                        { "id": "opt2", "text": "No" }
                     ]
                  },
                  {
                     "id": "q5-opt-4-3-20",
                     "title": "How do you evaluate the scope of potential positive impacts?",
                     "type": "text",
                     "triggerOption": "3 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-3-21",
                     "title": "What is the scope of the potential positive impact due to Climate change adaptation?",
                     "type": "multiple-choice",
                     "triggerOption": "3 potential positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt2", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-4-3-22",
                     "title": "How do you evaluate the scope of potential positive impacts?",
                     "type": "text",
                     "triggerOption": "3 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-3-23",
                     "title": "What is the scope of the potential positive impact due to Climate change adaptation?",
                     "type": "multiple-choice",
                     "triggerOption": "3 potential positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt2", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-4-3-24",
                     "title": "How do you determine the extent to which these impacts are irreversible or difficult to remediate? ",
                     "type": "text",
                     "triggerOption": "3 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-3-25",
                     "title": "What is the magnitude of the irremediability of your company's potential positive impacts related to Climate change adaptation?",
                     "type": "multiple-choice",
                     "triggerOption": "3 potential positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very easy to remedy" },
                        { "id": "opt2", "text": "Relatively easy to remedy short-term" },
                        { "id": "opt3", "text": "Remediable with effort (time & cost)" },
                        { "id": "opt4", "text": "Very difficult to remedy or long-term" },
                        { "id": "opt5", "text": "Non-remediable/irreversible" }
                     ]
                  },
                  {
                     "id": "q5-opt-4-3-26",
                     "title": "Does the impact relate to human rights?",
                     "type": "text",
                     "triggerOption": "3 potential positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Yes" },
                        { "id": "opt2", "text": "No" }
                     ]
                  },
                  {
                     "id": "q5-opt-4-3-27",
                     "title": "What criteria does your company use to estimate the likelihood and timelines for potential positive impacts related to climate change adaptation?",
                     "type": "text",
                     "triggerOption": "3 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-3-28",
                     "title": "What criteria does your company use to estimate the likelihood and timelines for potential positive impacts related to climate change adaptation?",
                     "type": "text",
                     "triggerOption": "3 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-3-29",
                     "title": "What is the potential likelihood of these positive impacts to occur within a given period?",
                     "type": "multiple-choice",
                     "triggerOption": "3 potential positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very unlikely" },
                        { "id": "opt2", "text": "Unlikely" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Likely" },
                        { "id": "opt5", "text": "Highly likely" }
                     ]
                  },
                  {
                     "id": "q5-opt-4-3-30",
                     "title": "potential positive Impact - Score",
                     "type": "text",
                     "triggerOption": "3 potential positive impacts",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q5-opt-4-3-31",
                     "title": "Describe the first potential positive impact in detail.",
                     "type": "text",
                     "triggerOption": "3 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-3-32",
                     "title": "What is the identified impact?",
                     "type": "text",
                     "triggerOption": "3 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-3-33",
                     "title": "Give a title to the identified impact.",
                     "type": "text",
                     "triggerOption": "3 potential positive impacts",
                     "required": true,
                     "description": "Please keep the impact title concise"
                  },
                  {
                     "id": "q5-opt-4-3-34",
                     "title": "Is this impact clearly material without conducting a materiality assessment?",
                     "type": "text",
                     "triggerOption": "3 potential positive impacts",
                     "required": true,
                     "description": "Selecting yes means that this impact will be automatically material. This is useful for sustainability matters that are very clearly linked to your company's operations. Only use this option when this impact is related to your business's core operations.",
                     "options": [
                        { "id": "opt1", "text": "Yes" },
                        { "id": "opt2", "text": "No" }
                     ]
                  },
                  {
                     "id": "q5-opt-4-3-35",
                     "title": "How do you evaluate the scope of potential positive impacts?",
                     "type": "text",
                     "triggerOption": "3 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-3-36",
                     "title": "What is the scope of the potential positive impact due to Climate change adaptation?",
                     "type": "multiple-choice",
                     "triggerOption": "3 potential positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt2", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-4-3-37",
                     "title": "How do you evaluate the scope of potential positive impacts?",
                     "type": "text",
                     "triggerOption": "3 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-3-38",
                     "title": "What is the scope of the potential positive impact due to Climate change adaptation?",
                     "type": "multiple-choice",
                     "triggerOption": "3 potential positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Limited" },
                        { "id": "opt2", "text": "Concentrated" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Widespread" },
                        { "id": "opt5", "text": "Global" }
                     ]
                  },
                  {
                     "id": "q5-opt-4-3-39",
                     "title": "How do you determine the extent to which these impacts are irreversible or difficult to remediate? ",
                     "type": "text",
                     "triggerOption": "3 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-3-40",
                     "title": "What is the magnitude of the irremediability of your company's potential positive impacts related to Climate change adaptation?",
                     "type": "multiple-choice",
                     "triggerOption": "3 potential positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very easy to remedy" },
                        { "id": "opt2", "text": "Relatively easy to remedy short-term" },
                        { "id": "opt3", "text": "Remediable with effort (time & cost)" },
                        { "id": "opt4", "text": "Very difficult to remedy or long-term" },
                        { "id": "opt5", "text": "Non-remediable/irreversible" }
                     ]
                  },
                  {
                     "id": "q5-opt-4-3-41",
                     "title": "Does the impact relate to human rights?",
                     "type": "text",
                     "triggerOption": "3 potential positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Yes" },
                        { "id": "opt2", "text": "No" }
                     ]
                  },
                  {
                     "id": "q5-opt-4-3-42",
                     "title": "What criteria does your company use to estimate the likelihood and timelines for potential positive impacts related to climate change adaptation?",
                     "type": "text",
                     "triggerOption": "3 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-3-43",
                     "title": "What criteria does your company use to estimate the likelihood and timelines for potential positive impacts related to climate change adaptation?",
                     "type": "text",
                     "triggerOption": "3 potential positive impacts",
                     "required": true
                  },
                  {
                     "id": "q5-opt-4-3-44",
                     "title": "What is the potential likelihood of these positive impacts to occur within a given period?",
                     "type": "multiple-choice",
                     "triggerOption": "3 potential positive impacts",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very unlikely" },
                        { "id": "opt2", "text": "Unlikely" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "Likely" },
                        { "id": "opt5", "text": "Highly likely" }
                     ]
                  },
                  {
                     "id": "q5-opt-4-3-45",
                     "title": "potential positive Impact - Score",
                     "type": "text",
                     "triggerOption": "3 potential positive impacts",
                     "required": true,
                     "description": "END"
                  },
               ],
            },
         ],
      },
      {
         "id": "q6",
         "title": "Do you foresee financial risks in the indicated periods related to climate change adaptation?",
         "type": "multiple-choice",
         "required": true,
         "options": [
            { "id": "opt1", "text": "Yes: in short-term (<1 year)" },
            { "id": "opt2", "text": "Yes: in mid-term (1-5 years)" },
            { "id": "opt3", "text": "Yes: in long-term (>5 years)" },
            { "id": "opt4", "text": "No" }
         ],
         subQuestions: [
            {
               "id": "q6-opt-1-1",
               "title": "How many short-term financial risks have you identified?",
               "type": "multiple-choice",
               "required": true,
               "triggerOption": "Yes: in short-term (<1 year)",
               "options": [
                  { "id": "opt1", "text": "1 short-term risk" },
                  { "id": "opt2", "text": "2 short-term risk" },
                  { "id": "opt3", "text": "3 short-term risk" },
               ],
               subQuestions: [
                  {
                     "id": "q6-opt-1-1-1",
                     "title": "Describe the first short-term financial risk in detail.",
                     "type": "text",
                     "triggerOption": "1 short-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-1-1-2",
                     "title": "What is the threshold chosen by your financial experts of assessing the materiality of short-term financial risks?",
                     "type": "text",
                     "triggerOption": "1 short-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-1-1-3",
                     "title": "How do you assess the likelihood of this short-term financial risk realizing within the next year?",
                     "type": "text",
                     "triggerOption": "1 short-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-1-1-4",
                     "title": "What is the short-term financial risk relation in climate change adaptation?",
                     "type": "text",
                     "triggerOption": "1 short-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-1-1-5",
                     "title": "Give a title to the financial risk. ",
                     "type": "text",
                     "triggerOption": "1 short-term risk",
                     "required": true,
                     "description": "Please keep the risk title concise"
                  },
                  {
                     "id": "q6-opt-1-1-6",
                     "title": "Based on the chosen financial threshold, what is the magnitude of the short-term risk?",
                     "type": "multiple-choice",
                     "triggerOption": "1 short-term risk",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Insignificant" },
                        { "id": "opt2", "text": "Negligible" },
                        { "id": "opt3", "text": "Moderate" },
                        { "id": "opt4", "text": "Externsive" },
                        { "id": "opt5", "text": "Significant" }
                     ]
                  },
                  {
                     "id": "q6-opt-1-1-7",
                     "title": "What is the potential likelihood of these short-term financial risk realizing in the next two to five years?",
                     "type": "multiple-choice",
                     "triggerOption": "1 short-term risk",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very low" },
                        { "id": "opt2", "text": "Low" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "High" },
                        { "id": "opt5", "text": "Very High" }
                     ]
                  },
                  {
                     "id": "q6-opt-1-1-8",
                     "title": "Short Term Financial Risk – Score",
                     "type": "text",
                     "triggerOption": "1 short-term risk",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q6-opt-1-2-1",
                     "title": "Describe the first short-term financial risk in detail.",
                     "type": "text",
                     "triggerOption": "2 short-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-1-2-2",
                     "title": "What is the threshold chosen by your financial experts of assessing the materiality of short-term financial risks?",
                     "type": "text",
                     "triggerOption": "2 short-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-1-2-3",
                     "title": "How do you assess the likelihood of this short-term financial risk realizing within the next year?",
                     "type": "text",
                     "triggerOption": "2 short-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-1-2-4",
                     "title": "What is the short-term financial risk relation in climate change adaptation?",
                     "type": "text",
                     "triggerOption": "2 short-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-1-2-5",
                     "title": "Give a title to the financial risk. ",
                     "type": "text",
                     "triggerOption": "2 short-term risk",
                     "required": true,
                     "description": "Please keep the risk title concise"
                  },
                  {
                     "id": "q6-opt-1-2-6",
                     "title": "Based on the chosen financial threshold, what is the magnitude of the short-term risk?",
                     "type": "multiple-choice",
                     "triggerOption": "2 short-term risk",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Insignificant" },
                        { "id": "opt2", "text": "Negligible" },
                        { "id": "opt3", "text": "Moderate" },
                        { "id": "opt4", "text": "Externsive" },
                        { "id": "opt5", "text": "Significant" }
                     ]
                  },
                  {
                     "id": "q6-opt-1-2-7",
                     "title": "What is the potential likelihood of these short-term financial risk realizing in the next two to five years?",
                     "type": "multiple-choice",
                     "triggerOption": "2 short-term risk",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very low" },
                        { "id": "opt2", "text": "Low" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "High" },
                        { "id": "opt5", "text": "Very High" }
                     ]
                  },
                  {
                     "id": "q6-opt-1-2-8",
                     "title": "Second Short Term Financial Risk – Score",
                     "type": "text",
                     "triggerOption": "2 short-term risk",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q6-opt-1-2-9",
                     "title": "Describe the second short-term financial risk in detail.",
                     "type": "text",
                     "triggerOption": "2 short-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-1-2-10",
                     "title": "What is the threshold chosen by your financial experts of assessing the materiality of short-term financial risks?",
                     "type": "text",
                     "triggerOption": "2 short-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-1-2-11",
                     "title": "How do you assess the likelihood of this short-term financial risk realizing within the next year?",
                     "type": "text",
                     "triggerOption": "2 short-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-1-2-12",
                     "title": "What is the short-term financial risk relation in climate change adaptation?",
                     "type": "text",
                     "triggerOption": "2 short-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-1-2-13",
                     "title": "Give a title to the financial risk. ",
                     "type": "text",
                     "triggerOption": "2 short-term risk",
                     "required": true,
                     "description": "Please keep the risk title concise"
                  },
                  {
                     "id": "q6-opt-1-2-14",
                     "title": "Based on the chosen financial threshold, what is the magnitude of the short-term risk?",
                     "type": "multiple-choice",
                     "triggerOption": "2 short-term risk",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Insignificant" },
                        { "id": "opt2", "text": "Negligible" },
                        { "id": "opt3", "text": "Moderate" },
                        { "id": "opt4", "text": "Externsive" },
                        { "id": "opt5", "text": "Significant" }
                     ]
                  },
                  {
                     "id": "q6-opt-1-2-15",
                     "title": "What is the potential likelihood of these short-term financial risk realizing in the next two to five years?",
                     "type": "multiple-choice",
                     "triggerOption": "2 short-term risk",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very low" },
                        { "id": "opt2", "text": "Low" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "High" },
                        { "id": "opt5", "text": "Very High" }
                     ]
                  },
                  {
                     "id": "q6-opt-1-2-16",
                     "title": "Second Short Term Financial Risk – Score",
                     "type": "text",
                     "triggerOption": "2 short-term risk",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q6-opt-1-3-1",
                     "title": "Describe the first short-term financial risk in detail.",
                     "type": "text",
                     "triggerOption": "3 short-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-1-3-2",
                     "title": "What is the threshold chosen by your financial experts of assessing the materiality of 3 short-term financial risks?",
                     "type": "text",
                     "triggerOption": "3 short-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-1-3-3",
                     "title": "How do you assess the likelihood of this 3 short-term financial risk realizing within the next year?",
                     "type": "text",
                     "triggerOption": "3 short-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-1-3-4",
                     "title": "What is the 3 short-term financial risk relation in climate change adaptation?",
                     "type": "text",
                     "triggerOption": "3 short-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-1-3-5",
                     "title": "Give a title to the financial risk. ",
                     "type": "text",
                     "triggerOption": "3 short-term risk",
                     "required": true,
                     "description": "Please keep the risk title concise"
                  },
                  {
                     "id": "q6-opt-1-3-6",
                     "title": "Based on the chosen financial threshold, what is the magnitude of the 3 short-term risk?",
                     "type": "multiple-choice",
                     "triggerOption": "3 short-term risk",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Insignificant" },
                        { "id": "opt2", "text": "Negligible" },
                        { "id": "opt3", "text": "Moderate" },
                        { "id": "opt4", "text": "Externsive" },
                        { "id": "opt5", "text": "Significant" }
                     ]
                  },
                  {
                     "id": "q6-opt-1-3-7",
                     "title": "What is the potential likelihood of these 3 short-term financial risk realizing in the next two to five years?",
                     "type": "multiple-choice",
                     "triggerOption": "3 short-term risk",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very low" },
                        { "id": "opt2", "text": "Low" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "High" },
                        { "id": "opt5", "text": "Very High" }
                     ]
                  },
                  {
                     "id": "q6-opt-1-3-8",
                     "title": "Third Short Term Financial Risk – Score",
                     "type": "text",
                     "triggerOption": "3 short-term risk",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q6-opt-1-3-9",
                     "title": "Describe the second short-term financial risk in detail.",
                     "type": "text",
                     "triggerOption": "3 short-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-1-3-10",
                     "title": "What is the threshold chosen by your financial experts of assessing the materiality of 3 short-term financial risks?",
                     "type": "text",
                     "triggerOption": "3 short-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-1-3-11",
                     "title": "How do you assess the likelihood of this 3 short-term financial risk realizing within the next year?",
                     "type": "text",
                     "triggerOption": "3 short-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-1-3-12",
                     "title": "What is the 3 short-term financial risk relation in climate change adaptation?",
                     "type": "text",
                     "triggerOption": "3 short-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-1-3-13",
                     "title": "Give a title to the financial risk. ",
                     "type": "text",
                     "triggerOption": "3 short-term risk",
                     "required": true,
                     "description": "Please keep the risk title concise"
                  },
                  {
                     "id": "q6-opt-1-3-14",
                     "title": "Based on the chosen financial threshold, what is the magnitude of the 3 short-term risk?",
                     "type": "multiple-choice",
                     "triggerOption": "3 short-term risk",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Insignificant" },
                        { "id": "opt2", "text": "Negligible" },
                        { "id": "opt3", "text": "Moderate" },
                        { "id": "opt4", "text": "Externsive" },
                        { "id": "opt5", "text": "Significant" }
                     ]
                  },
                  {
                     "id": "q6-opt-1-3-15",
                     "title": "What is the potential likelihood of these 3 short-term financial risk realizing in the next two to five years?",
                     "type": "multiple-choice",
                     "triggerOption": "3 short-term risk",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very low" },
                        { "id": "opt2", "text": "Low" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "High" },
                        { "id": "opt5", "text": "Very High" }
                     ]
                  },
                  {
                     "id": "q6-opt-1-3-16",
                     "title": "Third Short Term Financial Risk – Score",
                     "type": "text",
                     "triggerOption": "3 short-term risk",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q6-opt-1-3-17",
                     "title": "Describe the third short-term financial risk in detail.",
                     "type": "text",
                     "triggerOption": "3 short-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-1-3-18",
                     "title": "What is the threshold chosen by your financial experts of assessing the materiality of 3 short-term financial risks?",
                     "type": "text",
                     "triggerOption": "3 short-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-1-3-19",
                     "title": "How do you assess the likelihood of this 3 short-term financial risk realizing within the next year?",
                     "type": "text",
                     "triggerOption": "3 short-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-1-3-20",
                     "title": "What is the 3 short-term financial risk relation in climate change adaptation?",
                     "type": "text",
                     "triggerOption": "3 short-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-1-3-21",
                     "title": "Give a title to the financial risk. ",
                     "type": "text",
                     "triggerOption": "3 short-term risk",
                     "required": true,
                     "description": "Please keep the risk title concise"
                  },
                  {
                     "id": "q6-opt-1-3-22",
                     "title": "Based on the chosen financial threshold, what is the magnitude of the 3 short-term risk?",
                     "type": "multiple-choice",
                     "triggerOption": "3 short-term risk",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Insignificant" },
                        { "id": "opt2", "text": "Negligible" },
                        { "id": "opt3", "text": "Moderate" },
                        { "id": "opt4", "text": "Externsive" },
                        { "id": "opt5", "text": "Significant" }
                     ]
                  },
                  {
                     "id": "q6-opt-1-3-23",
                     "title": "What is the potential likelihood of these 3 short-term financial risk realizing in the next two to five years?",
                     "type": "multiple-choice",
                     "triggerOption": "3 short-term risk",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very low" },
                        { "id": "opt2", "text": "Low" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "High" },
                        { "id": "opt5", "text": "Very High" }
                     ]
                  },
                  {
                     "id": "q6-opt-1-3-24",
                     "title": "Third Short Term Financial Risk – Score",
                     "type": "text",
                     "triggerOption": "3 short-term risk",
                     "required": true,
                     "description": "END"
                  },
               ],
            },
            {
               "id": "q6-opt-2-1",
               "title": "How many mid-term financial risks have you identified?",
               "type": "multiple-choice",
               "required": true,
               "triggerOption": "Yes: in mid-term (<1 year)",
               "options": [
                  { "id": "opt1", "text": "1 mid-term risk" },
                  { "id": "opt2", "text": "2 mid-term risk" },
                  { "id": "opt3", "text": "3 mid-term risk" },
               ],
               subQuestions: [
                  {
                     "id": "q6-opt-2-1-1",
                     "title": "Describe the first mid-term financial risk in detail.",
                     "type": "text",
                     "triggerOption": "1 mid-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-2-1-2",
                     "title": "What is the threshold chosen by your financial experts of assessing the materiality of mid-term financial risks?",
                     "type": "text",
                     "triggerOption": "1 mid-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-2-1-3",
                     "title": "How do you assess the likelihood of this mid-term financial risk realizing within the next year?",
                     "type": "text",
                     "triggerOption": "1 mid-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-2-1-4",
                     "title": "What is the mid-term financial risk relation in climate change adaptation?",
                     "type": "text",
                     "triggerOption": "1 mid-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-2-1-5",
                     "title": "Give a title to the financial risk. ",
                     "type": "text",
                     "triggerOption": "1 mid-term risk",
                     "required": true,
                     "description": "Please keep the risk title concise"
                  },
                  {
                     "id": "q6-opt-2-1-6",
                     "title": "Based on the chosen financial threshold, what is the magnitude of the mid-term risk?",
                     "type": "multiple-choice",
                     "triggerOption": "1 mid-term risk",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Insignificant" },
                        { "id": "opt2", "text": "Negligible" },
                        { "id": "opt3", "text": "Moderate" },
                        { "id": "opt4", "text": "Externsive" },
                        { "id": "opt5", "text": "Significant" }
                     ]
                  },
                  {
                     "id": "q6-opt-2-1-7",
                     "title": "What is the potential likelihood of these mid-term financial risk realizing in the next two to five years?",
                     "type": "multiple-choice",
                     "triggerOption": "1 mid-term risk",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very low" },
                        { "id": "opt2", "text": "Low" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "High" },
                        { "id": "opt5", "text": "Very High" }
                     ]
                  },
                  {
                     "id": "q6-opt-2-1-8",
                     "title": "Medium Term Financial Risk – Score",
                     "type": "text",
                     "triggerOption": "1 mid-term risk",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q6-opt-2-2-1",
                     "title": "Describe the first mid-term financial risk in detail.",
                     "type": "text",
                     "triggerOption": "2 mid-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-2-2-2",
                     "title": "What is the threshold chosen by your financial experts of assessing the materiality of mid-term financial risks?",
                     "type": "text",
                     "triggerOption": "2 mid-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-2-2-3",
                     "title": "How do you assess the likelihood of this mid-term financial risk realizing within the next year?",
                     "type": "text",
                     "triggerOption": "2 mid-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-2-2-4",
                     "title": "What is the mid-term financial risk relation in climate change adaptation?",
                     "type": "text",
                     "triggerOption": "2 mid-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-2-2-5",
                     "title": "Give a title to the financial risk. ",
                     "type": "text",
                     "triggerOption": "2 mid-term risk",
                     "required": true,
                     "description": "Please keep the risk title concise"
                  },
                  {
                     "id": "q6-opt-2-2-6",
                     "title": "Based on the chosen financial threshold, what is the magnitude of the mid-term risk?",
                     "type": "multiple-choice",
                     "triggerOption": "2 mid-term risk",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Insignificant" },
                        { "id": "opt2", "text": "Negligible" },
                        { "id": "opt3", "text": "Moderate" },
                        { "id": "opt4", "text": "Externsive" },
                        { "id": "opt5", "text": "Significant" }
                     ]
                  },
                  {
                     "id": "q6-opt-2-2-7",
                     "title": "What is the potential likelihood of these mid-term financial risk realizing in the next two to five years?",
                     "type": "multiple-choice",
                     "triggerOption": "2 mid-term risk",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very low" },
                        { "id": "opt2", "text": "Low" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "High" },
                        { "id": "opt5", "text": "Very High" }
                     ]
                  },
                  {
                     "id": "q6-opt-2-2-8",
                     "title": "Second Medium Term Financial Risk – Score",
                     "type": "text",
                     "triggerOption": "2 mid-term risk",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q6-opt-2-2-9",
                     "title": "Describe the second mid-term financial risk in detail.",
                     "type": "text",
                     "triggerOption": "2 mid-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-2-2-10",
                     "title": "What is the threshold chosen by your financial experts of assessing the materiality of mid-term financial risks?",
                     "type": "text",
                     "triggerOption": "2 mid-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-2-2-11",
                     "title": "How do you assess the likelihood of this mid-term financial risk realizing within the next year?",
                     "type": "text",
                     "triggerOption": "2 mid-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-2-2-12",
                     "title": "What is the mid-term financial risk relation in climate change adaptation?",
                     "type": "text",
                     "triggerOption": "2 mid-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-2-2-13",
                     "title": "Give a title to the financial risk. ",
                     "type": "text",
                     "triggerOption": "2 mid-term risk",
                     "required": true,
                     "description": "Please keep the risk title concise"
                  },
                  {
                     "id": "q6-opt-2-2-14",
                     "title": "Based on the chosen financial threshold, what is the magnitude of the mid-term risk?",
                     "type": "multiple-choice",
                     "triggerOption": "2 mid-term risk",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Insignificant" },
                        { "id": "opt2", "text": "Negligible" },
                        { "id": "opt3", "text": "Moderate" },
                        { "id": "opt4", "text": "Externsive" },
                        { "id": "opt5", "text": "Significant" }
                     ]
                  },
                  {
                     "id": "q6-opt-2-2-15",
                     "title": "What is the potential likelihood of these mid-term financial risk realizing in the next two to five years?",
                     "type": "multiple-choice",
                     "triggerOption": "2 mid-term risk",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very low" },
                        { "id": "opt2", "text": "Low" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "High" },
                        { "id": "opt5", "text": "Very High" }
                     ]
                  },
                  {
                     "id": "q6-opt-2-2-16",
                     "title": "Second Medium Term Financial Risk – Score",
                     "type": "text",
                     "triggerOption": "2 mid-term risk",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q6-opt-2-3-1",
                     "title": "Describe the first mid-term financial risk in detail.",
                     "type": "text",
                     "triggerOption": "3 mid-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-2-3-2",
                     "title": "What is the threshold chosen by your financial experts of assessing the materiality of 3 mid-term financial risks?",
                     "type": "text",
                     "triggerOption": "3 mid-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-2-3-3",
                     "title": "How do you assess the likelihood of this 3 mid-term financial risk realizing within the next year?",
                     "type": "text",
                     "triggerOption": "3 mid-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-2-3-4",
                     "title": "What is the 3 mid-term financial risk relation in climate change adaptation?",
                     "type": "text",
                     "triggerOption": "3 mid-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-2-3-5",
                     "title": "Give a title to the financial risk. ",
                     "type": "text",
                     "triggerOption": "3 mid-term risk",
                     "required": true,
                     "description": "Please keep the risk title concise"
                  },
                  {
                     "id": "q6-opt-2-3-6",
                     "title": "Based on the chosen financial threshold, what is the magnitude of the 3 mid-term risk?",
                     "type": "multiple-choice",
                     "triggerOption": "3 mid-term risk",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Insignificant" },
                        { "id": "opt2", "text": "Negligible" },
                        { "id": "opt3", "text": "Moderate" },
                        { "id": "opt4", "text": "Externsive" },
                        { "id": "opt5", "text": "Significant" }
                     ]
                  },
                  {
                     "id": "q6-opt-2-3-7",
                     "title": "What is the potential likelihood of these 3 mid-term financial risk realizing in the next two to five years?",
                     "type": "multiple-choice",
                     "triggerOption": "3 mid-term risk",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very low" },
                        { "id": "opt2", "text": "Low" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "High" },
                        { "id": "opt5", "text": "Very High" }
                     ]
                  },
                  {
                     "id": "q6-opt-2-3-8",
                     "title": "Third Medium Term Financial Risk – Score",
                     "type": "text",
                     "triggerOption": "3 mid-term risk",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q6-opt-2-3-9",
                     "title": "Describe the second mid-term financial risk in detail.",
                     "type": "text",
                     "triggerOption": "3 mid-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-2-3-10",
                     "title": "What is the threshold chosen by your financial experts of assessing the materiality of 3 mid-term financial risks?",
                     "type": "text",
                     "triggerOption": "3 mid-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-2-3-11",
                     "title": "How do you assess the likelihood of this 3 mid-term financial risk realizing within the next year?",
                     "type": "text",
                     "triggerOption": "3 mid-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-2-3-12",
                     "title": "What is the 3 mid-term financial risk relation in climate change adaptation?",
                     "type": "text",
                     "triggerOption": "3 mid-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-2-3-13",
                     "title": "Give a title to the financial risk. ",
                     "type": "text",
                     "triggerOption": "3 mid-term risk",
                     "required": true,
                     "description": "Please keep the risk title concise"
                  },
                  {
                     "id": "q6-opt-2-3-14",
                     "title": "Based on the chosen financial threshold, what is the magnitude of the 3 mid-term risk?",
                     "type": "multiple-choice",
                     "triggerOption": "3 mid-term risk",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Insignificant" },
                        { "id": "opt2", "text": "Negligible" },
                        { "id": "opt3", "text": "Moderate" },
                        { "id": "opt4", "text": "Externsive" },
                        { "id": "opt5", "text": "Significant" }
                     ]
                  },
                  {
                     "id": "q6-opt-2-3-15",
                     "title": "What is the potential likelihood of these 3 mid-term financial risk realizing in the next two to five years?",
                     "type": "multiple-choice",
                     "triggerOption": "3 mid-term risk",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very low" },
                        { "id": "opt2", "text": "Low" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "High" },
                        { "id": "opt5", "text": "Very High" }
                     ]
                  },
                  {
                     "id": "q6-opt-2-3-16",
                     "title": "Third Medium Term Financial Risk – Score",
                     "type": "text",
                     "triggerOption": "3 mid-term risk",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q6-opt-2-3-17",
                     "title": "Describe the third mid-term financial risk in detail.",
                     "type": "text",
                     "triggerOption": "3 mid-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-2-3-18",
                     "title": "What is the threshold chosen by your financial experts of assessing the materiality of 3 mid-term financial risks?",
                     "type": "text",
                     "triggerOption": "3 mid-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-2-3-19",
                     "title": "How do you assess the likelihood of this 3 mid-term financial risk realizing within the next year?",
                     "type": "text",
                     "triggerOption": "3 mid-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-2-3-20",
                     "title": "What is the 3 mid-term financial risk relation in climate change adaptation?",
                     "type": "text",
                     "triggerOption": "3 mid-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-2-3-21",
                     "title": "Give a title to the financial risk. ",
                     "type": "text",
                     "triggerOption": "3 mid-term risk",
                     "required": true,
                     "description": "Please keep the risk title concise"
                  },
                  {
                     "id": "q6-opt-2-3-22",
                     "title": "Based on the chosen financial threshold, what is the magnitude of the 3 mid-term risk?",
                     "type": "multiple-choice",
                     "triggerOption": "3 mid-term risk",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Insignificant" },
                        { "id": "opt2", "text": "Negligible" },
                        { "id": "opt3", "text": "Moderate" },
                        { "id": "opt4", "text": "Externsive" },
                        { "id": "opt5", "text": "Significant" }
                     ]
                  },
                  {
                     "id": "q6-opt-2-3-23",
                     "title": "What is the potential likelihood of these 3 mid-term financial risk realizing in the next two to five years?",
                     "type": "multiple-choice",
                     "triggerOption": "3 mid-term risk",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very low" },
                        { "id": "opt2", "text": "Low" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "High" },
                        { "id": "opt5", "text": "Very High" }
                     ]
                  },
                  {
                     "id": "q6-opt-2-3-24",
                     "title": "Third Medium Term Financial Risk – Score",
                     "type": "text",
                     "triggerOption": "3 mid-term risk",
                     "required": true,
                     "description": "END"
                  },
               ],
            },
            {
               "id": "q6-opt-3-1",
               "title": "How many long-term financial risks have you identified?",
               "type": "multiple-choice",
               "required": true,
               "triggerOption": "Yes: in long-term (<1 year)",
               "options": [
                  { "id": "opt1", "text": "1 long-term risk" },
                  { "id": "opt2", "text": "2 long-term risk" },
                  { "id": "opt3", "text": "3 long-term risk" },
               ],
               subQuestions: [
                  {
                     "id": "q6-opt-3-1-1",
                     "title": "Describe the first long-term financial risk in detail.",
                     "type": "text",
                     "triggerOption": "1 long-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-3-1-2",
                     "title": "What is the threshold chosen by your financial experts of assessing the materiality of long-term financial risks?",
                     "type": "text",
                     "triggerOption": "1 long-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-3-1-3",
                     "title": "How do you assess the likelihood of this long-term financial risk realizing within the next year?",
                     "type": "text",
                     "triggerOption": "1 long-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-3-1-4",
                     "title": "What is the long-term financial risk relation in climate change adaptation?",
                     "type": "text",
                     "triggerOption": "1 long-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-3-1-5",
                     "title": "Give a title to the financial risk. ",
                     "type": "text",
                     "triggerOption": "1 long-term risk",
                     "required": true,
                     "description": "Please keep the risk title concise"
                  },
                  {
                     "id": "q6-opt-3-1-6",
                     "title": "Based on the chosen financial threshold, what is the magnitude of the long-term risk?",
                     "type": "multiple-choice",
                     "triggerOption": "1 long-term risk",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Insignificant" },
                        { "id": "opt2", "text": "Negligible" },
                        { "id": "opt3", "text": "Moderate" },
                        { "id": "opt4", "text": "Externsive" },
                        { "id": "opt5", "text": "Significant" }
                     ]
                  },
                  {
                     "id": "q6-opt-3-1-7",
                     "title": "What is the potential likelihood of these long-term financial risk realizing in the next two to five years?",
                     "type": "multiple-choice",
                     "triggerOption": "1 long-term risk",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very low" },
                        { "id": "opt2", "text": "Low" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "High" },
                        { "id": "opt5", "text": "Very High" }
                     ]
                  },
                  {
                     "id": "q6-opt-3-1-8",
                     "title": "Long Term Financial Risk – Score",
                     "type": "text",
                     "triggerOption": "1 long-term risk",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q6-opt-3-2-1",
                     "title": "Describe the first long-term financial risk in detail.",
                     "type": "text",
                     "triggerOption": "2 long-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-3-2-2",
                     "title": "What is the threshold chosen by your financial experts of assessing the materiality of long-term financial risks?",
                     "type": "text",
                     "triggerOption": "2 long-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-3-2-3",
                     "title": "How do you assess the likelihood of this long-term financial risk realizing within the next year?",
                     "type": "text",
                     "triggerOption": "2 long-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-3-2-4",
                     "title": "What is the long-term financial risk relation in climate change adaptation?",
                     "type": "text",
                     "triggerOption": "2 long-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-3-2-5",
                     "title": "Give a title to the financial risk. ",
                     "type": "text",
                     "triggerOption": "2 long-term risk",
                     "required": true,
                     "description": "Please keep the risk title concise"
                  },
                  {
                     "id": "q6-opt-3-2-6",
                     "title": "Based on the chosen financial threshold, what is the magnitude of the long-term risk?",
                     "type": "multiple-choice",
                     "triggerOption": "2 long-term risk",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Insignificant" },
                        { "id": "opt2", "text": "Negligible" },
                        { "id": "opt3", "text": "Moderate" },
                        { "id": "opt4", "text": "Externsive" },
                        { "id": "opt5", "text": "Significant" }
                     ]
                  },
                  {
                     "id": "q6-opt-3-2-7",
                     "title": "What is the potential likelihood of these long-term financial risk realizing in the next two to five years?",
                     "type": "multiple-choice",
                     "triggerOption": "2 long-term risk",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very low" },
                        { "id": "opt2", "text": "Low" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "High" },
                        { "id": "opt5", "text": "Very High" }
                     ]
                  },
                  {
                     "id": "q6-opt-3-2-8",
                     "title": "Second Long Term Financial Risk – Score",
                     "type": "text",
                     "triggerOption": "2 long-term risk",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q6-opt-3-2-9",
                     "title": "Describe the second long-term financial risk in detail.",
                     "type": "text",
                     "triggerOption": "2 long-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-3-2-10",
                     "title": "What is the threshold chosen by your financial experts of assessing the materiality of long-term financial risks?",
                     "type": "text",
                     "triggerOption": "2 long-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-3-2-11",
                     "title": "How do you assess the likelihood of this long-term financial risk realizing within the next year?",
                     "type": "text",
                     "triggerOption": "2 long-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-3-2-12",
                     "title": "What is the long-term financial risk relation in climate change adaptation?",
                     "type": "text",
                     "triggerOption": "2 long-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-3-2-13",
                     "title": "Give a title to the financial risk. ",
                     "type": "text",
                     "triggerOption": "2 long-term risk",
                     "required": true,
                     "description": "Please keep the risk title concise"
                  },
                  {
                     "id": "q6-opt-3-2-14",
                     "title": "Based on the chosen financial threshold, what is the magnitude of the long-term risk?",
                     "type": "multiple-choice",
                     "triggerOption": "2 long-term risk",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Insignificant" },
                        { "id": "opt2", "text": "Negligible" },
                        { "id": "opt3", "text": "Moderate" },
                        { "id": "opt4", "text": "Externsive" },
                        { "id": "opt5", "text": "Significant" }
                     ]
                  },
                  {
                     "id": "q6-opt-3-2-15",
                     "title": "What is the potential likelihood of these long-term financial risk realizing in the next two to five years?",
                     "type": "multiple-choice",
                     "triggerOption": "2 long-term risk",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very low" },
                        { "id": "opt2", "text": "Low" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "High" },
                        { "id": "opt5", "text": "Very High" }
                     ]
                  },
                  {
                     "id": "q6-opt-3-2-16",
                     "title": "Second Long Term Financial Risk – Score",
                     "type": "text",
                     "triggerOption": "2 long-term risk",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q6-opt-3-3-1",
                     "title": "Describe the first long-term financial risk in detail.",
                     "type": "text",
                     "triggerOption": "3 long-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-3-3-2",
                     "title": "What is the threshold chosen by your financial experts of assessing the materiality of 3 long-term financial risks?",
                     "type": "text",
                     "triggerOption": "3 long-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-3-3-3",
                     "title": "How do you assess the likelihood of this 3 long-term financial risk realizing within the next year?",
                     "type": "text",
                     "triggerOption": "3 long-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-3-3-4",
                     "title": "What is the 3 long-term financial risk relation in climate change adaptation?",
                     "type": "text",
                     "triggerOption": "3 long-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-3-3-5",
                     "title": "Give a title to the financial risk. ",
                     "type": "text",
                     "triggerOption": "3 long-term risk",
                     "required": true,
                     "description": "Please keep the risk title concise"
                  },
                  {
                     "id": "q6-opt-3-3-6",
                     "title": "Based on the chosen financial threshold, what is the magnitude of the 3 long-term risk?",
                     "type": "multiple-choice",
                     "triggerOption": "3 long-term risk",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Insignificant" },
                        { "id": "opt2", "text": "Negligible" },
                        { "id": "opt3", "text": "Moderate" },
                        { "id": "opt4", "text": "Externsive" },
                        { "id": "opt5", "text": "Significant" }
                     ]
                  },
                  {
                     "id": "q6-opt-3-3-7",
                     "title": "What is the potential likelihood of these 3 long-term financial risk realizing in the next two to five years?",
                     "type": "multiple-choice",
                     "triggerOption": "3 long-term risk",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very low" },
                        { "id": "opt2", "text": "Low" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "High" },
                        { "id": "opt5", "text": "Very High" }
                     ]
                  },
                  {
                     "id": "q6-opt-3-3-8",
                     "title": "Third Long Term Financial Risk – Score",
                     "type": "text",
                     "triggerOption": "3 long-term risk",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q6-opt-3-3-9",
                     "title": "Describe the second long-term financial risk in detail.",
                     "type": "text",
                     "triggerOption": "3 long-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-3-3-10",
                     "title": "What is the threshold chosen by your financial experts of assessing the materiality of 3 long-term financial risks?",
                     "type": "text",
                     "triggerOption": "3 long-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-3-3-11",
                     "title": "How do you assess the likelihood of this 3 long-term financial risk realizing within the next year?",
                     "type": "text",
                     "triggerOption": "3 long-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-3-3-12",
                     "title": "What is the 3 long-term financial risk relation in climate change adaptation?",
                     "type": "text",
                     "triggerOption": "3 long-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-3-3-13",
                     "title": "Give a title to the financial risk. ",
                     "type": "text",
                     "triggerOption": "3 long-term risk",
                     "required": true,
                     "description": "Please keep the risk title concise"
                  },
                  {
                     "id": "q6-opt-3-3-14",
                     "title": "Based on the chosen financial threshold, what is the magnitude of the 3 long-term risk?",
                     "type": "multiple-choice",
                     "triggerOption": "3 long-term risk",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Insignificant" },
                        { "id": "opt2", "text": "Negligible" },
                        { "id": "opt3", "text": "Moderate" },
                        { "id": "opt4", "text": "Externsive" },
                        { "id": "opt5", "text": "Significant" }
                     ]
                  },
                  {
                     "id": "q6-opt-3-3-15",
                     "title": "What is the potential likelihood of these 3 long-term financial risk realizing in the next two to five years?",
                     "type": "multiple-choice",
                     "triggerOption": "3 long-term risk",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very low" },
                        { "id": "opt2", "text": "Low" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "High" },
                        { "id": "opt5", "text": "Very High" }
                     ]
                  },
                  {
                     "id": "q6-opt-3-3-16",
                     "title": "Third Long Term Financial Risk – Score",
                     "type": "text",
                     "triggerOption": "3 long-term risk",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q6-opt-3-3-17",
                     "title": "Describe the third long-term financial risk in detail.",
                     "type": "text",
                     "triggerOption": "3 long-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-3-3-18",
                     "title": "What is the threshold chosen by your financial experts of assessing the materiality of 3 long-term financial risks?",
                     "type": "text",
                     "triggerOption": "3 long-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-3-3-19",
                     "title": "How do you assess the likelihood of this 3 long-term financial risk realizing within the next year?",
                     "type": "text",
                     "triggerOption": "3 long-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-3-3-20",
                     "title": "What is the 3 long-term financial risk relation in climate change adaptation?",
                     "type": "text",
                     "triggerOption": "3 long-term risk",
                     "required": true
                  },
                  {
                     "id": "q6-opt-3-3-21",
                     "title": "Give a title to the financial risk. ",
                     "type": "text",
                     "triggerOption": "3 long-term risk",
                     "required": true,
                     "description": "Please keep the risk title concise"
                  },
                  {
                     "id": "q6-opt-3-3-22",
                     "title": "Based on the chosen financial threshold, what is the magnitude of the 3 long-term risk?",
                     "type": "multiple-choice",
                     "triggerOption": "3 long-term risk",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Insignificant" },
                        { "id": "opt2", "text": "Negligible" },
                        { "id": "opt3", "text": "Moderate" },
                        { "id": "opt4", "text": "Externsive" },
                        { "id": "opt5", "text": "Significant" }
                     ]
                  },
                  {
                     "id": "q6-opt-3-3-23",
                     "title": "What is the potential likelihood of these 3 long-term financial risk realizing in the next two to five years?",
                     "type": "multiple-choice",
                     "triggerOption": "3 long-term risk",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very low" },
                        { "id": "opt2", "text": "Low" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "High" },
                        { "id": "opt5", "text": "Very High" }
                     ]
                  },
                  {
                     "id": "q6-opt-3-3-24",
                     "title": "Third Long Term Financial Risk – Score",
                     "type": "text",
                     "triggerOption": "3 long-term risk",
                     "required": true,
                     "description": "END"
                  },
               ],
            },
         ],
      },
      {
         "id": "q7",
         "title": "Do you foresee financial opportunities in the indicated periods related to climate change adaptation?",
         "type": "multiple-choice",
         "required": true,
         "options": [
            { "id": "opt1", "text": "Yes: in short-term (<1 year)" },
            { "id": "opt2", "text": "Yes: in mid-term (1-5 years)" },
            { "id": "opt3", "text": "Yes: in long-term (>5 years)" },
            { "id": "opt4", "text": "No" }
         ],
         subQuestions: [
            {
               "id": "q7-opt-1-1",
               "title": "How many short-term financial opportunities have you identified?",
               "type": "multiple-choice",
               "required": true,
               "triggerOption": "Yes: in short-term (<1 year)",
               "options": [
                  { "id": "opt1", "text": "1 short-term opportunity" },
                  { "id": "opt2", "text": "2 short-term opportunity" },
                  { "id": "opt3", "text": "3 short-term opportunity" },
               ],
               subQuestions: [
                  {
                     "id": "q7-opt-1-1-1",
                     "title": "Describe the first short-term financial opportunity in detail.",
                     "type": "text",
                     "triggerOption": "1 short-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-1-1-2",
                     "title": "What is the threshold chosen by your financial experts of assessing the materiality of short-term financial opportunities?",
                     "type": "text",
                     "triggerOption": "1 short-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-1-1-3",
                     "title": "How do you assess the likelihood of this short-term financial opportunity realizing within the next year?",
                     "type": "text",
                     "triggerOption": "1 short-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-1-1-4",
                     "title": "What is the short-term financial opportunity relation in climate change adaptation?",
                     "type": "text",
                     "triggerOption": "1 short-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-1-1-5",
                     "title": "Give a title to the financial opportunity. ",
                     "type": "text",
                     "triggerOption": "1 short-term opportunity",
                     "required": true,
                     "description": "Please keep the opportunity title concise"
                  },
                  {
                     "id": "q7-opt-1-1-6",
                     "title": "Based on the chosen financial threshold, what is the magnitude of the short-term opportunity?",
                     "type": "multiple-choice",
                     "triggerOption": "1 short-term opportunity",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Insignificant" },
                        { "id": "opt2", "text": "Negligible" },
                        { "id": "opt3", "text": "Moderate" },
                        { "id": "opt4", "text": "Externsive" },
                        { "id": "opt5", "text": "Significant" }
                     ]
                  },
                  {
                     "id": "q7-opt-1-1-7",
                     "title": "What is the potential likelihood of these short-term financial opportunity realizing in the next two to five years?",
                     "type": "multiple-choice",
                     "triggerOption": "1 short-term opportunity",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very low" },
                        { "id": "opt2", "text": "Low" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "High" },
                        { "id": "opt5", "text": "Very High" }
                     ]
                  },
                  {
                     "id": "q7-opt-1-1-8",
                     "title": "Short Term Financial opportunity – Score",
                     "type": "text",
                     "triggerOption": "1 short-term opportunity",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q7-opt-1-2-1",
                     "title": "Describe the first short-term financial opportunity in detail.",
                     "type": "text",
                     "triggerOption": "2 short-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-1-2-2",
                     "title": "What is the threshold chosen by your financial experts of assessing the materiality of short-term financial opportunities?",
                     "type": "text",
                     "triggerOption": "2 short-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-1-2-3",
                     "title": "How do you assess the likelihood of this short-term financial opportunity realizing within the next year?",
                     "type": "text",
                     "triggerOption": "2 short-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-1-2-4",
                     "title": "What is the short-term financial opportunity relation in climate change adaptation?",
                     "type": "text",
                     "triggerOption": "2 short-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-1-2-5",
                     "title": "Give a title to the financial opportunity. ",
                     "type": "text",
                     "triggerOption": "2 short-term opportunity",
                     "required": true,
                     "description": "Please keep the opportunity title concise"
                  },
                  {
                     "id": "q7-opt-1-2-6",
                     "title": "Based on the chosen financial threshold, what is the magnitude of the short-term opportunity?",
                     "type": "multiple-choice",
                     "triggerOption": "2 short-term opportunity",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Insignificant" },
                        { "id": "opt2", "text": "Negligible" },
                        { "id": "opt3", "text": "Moderate" },
                        { "id": "opt4", "text": "Externsive" },
                        { "id": "opt5", "text": "Significant" }
                     ]
                  },
                  {
                     "id": "q7-opt-1-2-7",
                     "title": "What is the potential likelihood of these short-term financial opportunity realizing in the next two to five years?",
                     "type": "multiple-choice",
                     "triggerOption": "2 short-term opportunity",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very low" },
                        { "id": "opt2", "text": "Low" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "High" },
                        { "id": "opt5", "text": "Very High" }
                     ]
                  },
                  {
                     "id": "q7-opt-1-2-8",
                     "title": "Second Short Term Financial opportunity – Score",
                     "type": "text",
                     "triggerOption": "2 short-term opportunity",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q7-opt-1-2-9",
                     "title": "Describe the second short-term financial opportunity in detail.",
                     "type": "text",
                     "triggerOption": "2 short-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-1-2-10",
                     "title": "What is the threshold chosen by your financial experts of assessing the materiality of short-term financial opportunities?",
                     "type": "text",
                     "triggerOption": "2 short-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-1-2-11",
                     "title": "How do you assess the likelihood of this short-term financial opportunity realizing within the next year?",
                     "type": "text",
                     "triggerOption": "2 short-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-1-2-12",
                     "title": "What is the short-term financial opportunity relation in climate change adaptation?",
                     "type": "text",
                     "triggerOption": "2 short-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-1-2-13",
                     "title": "Give a title to the financial opportunity. ",
                     "type": "text",
                     "triggerOption": "2 short-term opportunity",
                     "required": true,
                     "description": "Please keep the opportunity title concise"
                  },
                  {
                     "id": "q7-opt-1-2-14",
                     "title": "Based on the chosen financial threshold, what is the magnitude of the short-term opportunity?",
                     "type": "multiple-choice",
                     "triggerOption": "2 short-term opportunity",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Insignificant" },
                        { "id": "opt2", "text": "Negligible" },
                        { "id": "opt3", "text": "Moderate" },
                        { "id": "opt4", "text": "Externsive" },
                        { "id": "opt5", "text": "Significant" }
                     ]
                  },
                  {
                     "id": "q7-opt-1-2-15",
                     "title": "What is the potential likelihood of these short-term financial opportunity realizing in the next two to five years?",
                     "type": "multiple-choice",
                     "triggerOption": "2 short-term opportunity",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very low" },
                        { "id": "opt2", "text": "Low" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "High" },
                        { "id": "opt5", "text": "Very High" }
                     ]
                  },
                  {
                     "id": "q7-opt-1-2-16",
                     "title": "Second Short Term Financial opportunity – Score",
                     "type": "text",
                     "triggerOption": "2 short-term opportunity",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q7-opt-1-3-1",
                     "title": "Describe the first short-term financial opportunity in detail.",
                     "type": "text",
                     "triggerOption": "3 short-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-1-3-2",
                     "title": "What is the threshold chosen by your financial experts of assessing the materiality of 3 short-term financial opportunities?",
                     "type": "text",
                     "triggerOption": "3 short-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-1-3-3",
                     "title": "How do you assess the likelihood of this 3 short-term financial opportunity realizing within the next year?",
                     "type": "text",
                     "triggerOption": "3 short-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-1-3-4",
                     "title": "What is the 3 short-term financial opportunity relation in climate change adaptation?",
                     "type": "text",
                     "triggerOption": "3 short-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-1-3-5",
                     "title": "Give a title to the financial opportunity. ",
                     "type": "text",
                     "triggerOption": "3 short-term opportunity",
                     "required": true,
                     "description": "Please keep the opportunity title concise"
                  },
                  {
                     "id": "q7-opt-1-3-6",
                     "title": "Based on the chosen financial threshold, what is the magnitude of the 3 short-term opportunity?",
                     "type": "multiple-choice",
                     "triggerOption": "3 short-term opportunity",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Insignificant" },
                        { "id": "opt2", "text": "Negligible" },
                        { "id": "opt3", "text": "Moderate" },
                        { "id": "opt4", "text": "Externsive" },
                        { "id": "opt5", "text": "Significant" }
                     ]
                  },
                  {
                     "id": "q7-opt-1-3-7",
                     "title": "What is the potential likelihood of these 3 short-term financial opportunity realizing in the next two to five years?",
                     "type": "multiple-choice",
                     "triggerOption": "3 short-term opportunity",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very low" },
                        { "id": "opt2", "text": "Low" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "High" },
                        { "id": "opt5", "text": "Very High" }
                     ]
                  },
                  {
                     "id": "q7-opt-1-3-8",
                     "title": "Third Short Term Financial opportunity – Score",
                     "type": "text",
                     "triggerOption": "3 short-term opportunity",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q7-opt-1-3-9",
                     "title": "Describe the second short-term financial opportunity in detail.",
                     "type": "text",
                     "triggerOption": "3 short-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-1-3-10",
                     "title": "What is the threshold chosen by your financial experts of assessing the materiality of 3 short-term financial opportunities?",
                     "type": "text",
                     "triggerOption": "3 short-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-1-3-11",
                     "title": "How do you assess the likelihood of this 3 short-term financial opportunity realizing within the next year?",
                     "type": "text",
                     "triggerOption": "3 short-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-1-3-12",
                     "title": "What is the 3 short-term financial opportunity relation in climate change adaptation?",
                     "type": "text",
                     "triggerOption": "3 short-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-1-3-13",
                     "title": "Give a title to the financial opportunity. ",
                     "type": "text",
                     "triggerOption": "3 short-term opportunity",
                     "required": true,
                     "description": "Please keep the opportunity title concise"
                  },
                  {
                     "id": "q7-opt-1-3-14",
                     "title": "Based on the chosen financial threshold, what is the magnitude of the 3 short-term opportunity?",
                     "type": "multiple-choice",
                     "triggerOption": "3 short-term opportunity",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Insignificant" },
                        { "id": "opt2", "text": "Negligible" },
                        { "id": "opt3", "text": "Moderate" },
                        { "id": "opt4", "text": "Externsive" },
                        { "id": "opt5", "text": "Significant" }
                     ]
                  },
                  {
                     "id": "q7-opt-1-3-15",
                     "title": "What is the potential likelihood of these 3 short-term financial opportunity realizing in the next two to five years?",
                     "type": "multiple-choice",
                     "triggerOption": "3 short-term opportunity",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very low" },
                        { "id": "opt2", "text": "Low" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "High" },
                        { "id": "opt5", "text": "Very High" }
                     ]
                  },
                  {
                     "id": "q7-opt-1-3-16",
                     "title": "Third Short Term Financial opportunity – Score",
                     "type": "text",
                     "triggerOption": "3 short-term opportunity",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q7-opt-1-3-17",
                     "title": "Describe the third short-term financial opportunity in detail.",
                     "type": "text",
                     "triggerOption": "3 short-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-1-3-18",
                     "title": "What is the threshold chosen by your financial experts of assessing the materiality of 3 short-term financial opportunities?",
                     "type": "text",
                     "triggerOption": "3 short-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-1-3-19",
                     "title": "How do you assess the likelihood of this 3 short-term financial opportunity realizing within the next year?",
                     "type": "text",
                     "triggerOption": "3 short-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-1-3-20",
                     "title": "What is the 3 short-term financial opportunity relation in climate change adaptation?",
                     "type": "text",
                     "triggerOption": "3 short-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-1-3-21",
                     "title": "Give a title to the financial opportunity. ",
                     "type": "text",
                     "triggerOption": "3 short-term opportunity",
                     "required": true,
                     "description": "Please keep the opportunity title concise"
                  },
                  {
                     "id": "q7-opt-1-3-22",
                     "title": "Based on the chosen financial threshold, what is the magnitude of the 3 short-term opportunity?",
                     "type": "multiple-choice",
                     "triggerOption": "3 short-term opportunity",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Insignificant" },
                        { "id": "opt2", "text": "Negligible" },
                        { "id": "opt3", "text": "Moderate" },
                        { "id": "opt4", "text": "Externsive" },
                        { "id": "opt5", "text": "Significant" }
                     ]
                  },
                  {
                     "id": "q7-opt-1-3-23",
                     "title": "What is the potential likelihood of these 3 short-term financial opportunity realizing in the next two to five years?",
                     "type": "multiple-choice",
                     "triggerOption": "3 short-term opportunity",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very low" },
                        { "id": "opt2", "text": "Low" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "High" },
                        { "id": "opt5", "text": "Very High" }
                     ]
                  },
                  {
                     "id": "q7-opt-1-3-24",
                     "title": "Third Short Term Financial opportunity – Score",
                     "type": "text",
                     "triggerOption": "3 short-term opportunity",
                     "required": true,
                     "description": "END"
                  },
               ],
            },
            {
               "id": "q7-opt-2-1",
               "title": "How many mid-term financial opportunities have you identified?",
               "type": "multiple-choice",
               "required": true,
               "triggerOption": "Yes: in mid-term (<1 year)",
               "options": [
                  { "id": "opt1", "text": "1 mid-term opportunity" },
                  { "id": "opt2", "text": "2 mid-term opportunity" },
                  { "id": "opt3", "text": "3 mid-term opportunity" },
               ],
               subQuestions: [
                  {
                     "id": "q7-opt-2-1-1",
                     "title": "Describe the first mid-term financial opportunity in detail.",
                     "type": "text",
                     "triggerOption": "1 mid-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-2-1-2",
                     "title": "What is the threshold chosen by your financial experts of assessing the materiality of mid-term financial opportunities?",
                     "type": "text",
                     "triggerOption": "1 mid-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-2-1-3",
                     "title": "How do you assess the likelihood of this mid-term financial opportunity realizing within the next year?",
                     "type": "text",
                     "triggerOption": "1 mid-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-2-1-4",
                     "title": "What is the mid-term financial opportunity relation in climate change adaptation?",
                     "type": "text",
                     "triggerOption": "1 mid-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-2-1-5",
                     "title": "Give a title to the financial opportunity. ",
                     "type": "text",
                     "triggerOption": "1 mid-term opportunity",
                     "required": true,
                     "description": "Please keep the opportunity title concise"
                  },
                  {
                     "id": "q7-opt-2-1-6",
                     "title": "Based on the chosen financial threshold, what is the magnitude of the mid-term opportunity?",
                     "type": "multiple-choice",
                     "triggerOption": "1 mid-term opportunity",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Insignificant" },
                        { "id": "opt2", "text": "Negligible" },
                        { "id": "opt3", "text": "Moderate" },
                        { "id": "opt4", "text": "Externsive" },
                        { "id": "opt5", "text": "Significant" }
                     ]
                  },
                  {
                     "id": "q7-opt-2-1-7",
                     "title": "What is the potential likelihood of these mid-term financial opportunity realizing in the next two to five years?",
                     "type": "multiple-choice",
                     "triggerOption": "1 mid-term opportunity",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very low" },
                        { "id": "opt2", "text": "Low" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "High" },
                        { "id": "opt5", "text": "Very High" }
                     ]
                  },
                  {
                     "id": "q7-opt-2-1-8",
                     "title": "Medium Term Financial opportunity – Score",
                     "type": "text",
                     "triggerOption": "1 mid-term opportunity",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q7-opt-2-2-1",
                     "title": "Describe the first mid-term financial opportunity in detail.",
                     "type": "text",
                     "triggerOption": "2 mid-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-2-2-2",
                     "title": "What is the threshold chosen by your financial experts of assessing the materiality of mid-term financial opportunities?",
                     "type": "text",
                     "triggerOption": "2 mid-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-2-2-3",
                     "title": "How do you assess the likelihood of this mid-term financial opportunity realizing within the next year?",
                     "type": "text",
                     "triggerOption": "2 mid-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-2-2-4",
                     "title": "What is the mid-term financial opportunity relation in climate change adaptation?",
                     "type": "text",
                     "triggerOption": "2 mid-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-2-2-5",
                     "title": "Give a title to the financial opportunity. ",
                     "type": "text",
                     "triggerOption": "2 mid-term opportunity",
                     "required": true,
                     "description": "Please keep the opportunity title concise"
                  },
                  {
                     "id": "q7-opt-2-2-6",
                     "title": "Based on the chosen financial threshold, what is the magnitude of the mid-term opportunity?",
                     "type": "multiple-choice",
                     "triggerOption": "2 mid-term opportunity",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Insignificant" },
                        { "id": "opt2", "text": "Negligible" },
                        { "id": "opt3", "text": "Moderate" },
                        { "id": "opt4", "text": "Externsive" },
                        { "id": "opt5", "text": "Significant" }
                     ]
                  },
                  {
                     "id": "q7-opt-2-2-7",
                     "title": "What is the potential likelihood of these mid-term financial opportunity realizing in the next two to five years?",
                     "type": "multiple-choice",
                     "triggerOption": "2 mid-term opportunity",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very low" },
                        { "id": "opt2", "text": "Low" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "High" },
                        { "id": "opt5", "text": "Very High" }
                     ]
                  },
                  {
                     "id": "q7-opt-2-2-8",
                     "title": "Second Medium Term Financial opportunity – Score",
                     "type": "text",
                     "triggerOption": "2 mid-term opportunity",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q7-opt-2-2-9",
                     "title": "Describe the second mid-term financial opportunity in detail.",
                     "type": "text",
                     "triggerOption": "2 mid-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-2-2-10",
                     "title": "What is the threshold chosen by your financial experts of assessing the materiality of mid-term financial opportunities?",
                     "type": "text",
                     "triggerOption": "2 mid-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-2-2-11",
                     "title": "How do you assess the likelihood of this mid-term financial opportunity realizing within the next year?",
                     "type": "text",
                     "triggerOption": "2 mid-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-2-2-12",
                     "title": "What is the mid-term financial opportunity relation in climate change adaptation?",
                     "type": "text",
                     "triggerOption": "2 mid-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-2-2-13",
                     "title": "Give a title to the financial opportunity. ",
                     "type": "text",
                     "triggerOption": "2 mid-term opportunity",
                     "required": true,
                     "description": "Please keep the opportunity title concise"
                  },
                  {
                     "id": "q7-opt-2-2-14",
                     "title": "Based on the chosen financial threshold, what is the magnitude of the mid-term opportunity?",
                     "type": "multiple-choice",
                     "triggerOption": "2 mid-term opportunity",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Insignificant" },
                        { "id": "opt2", "text": "Negligible" },
                        { "id": "opt3", "text": "Moderate" },
                        { "id": "opt4", "text": "Externsive" },
                        { "id": "opt5", "text": "Significant" }
                     ]
                  },
                  {
                     "id": "q7-opt-2-2-15",
                     "title": "What is the potential likelihood of these mid-term financial opportunity realizing in the next two to five years?",
                     "type": "multiple-choice",
                     "triggerOption": "2 mid-term opportunity",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very low" },
                        { "id": "opt2", "text": "Low" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "High" },
                        { "id": "opt5", "text": "Very High" }
                     ]
                  },
                  {
                     "id": "q7-opt-2-2-16",
                     "title": "Second Medium Term Financial opportunity – Score",
                     "type": "text",
                     "triggerOption": "2 mid-term opportunity",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q7-opt-2-3-1",
                     "title": "Describe the first mid-term financial opportunity in detail.",
                     "type": "text",
                     "triggerOption": "3 mid-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-2-3-2",
                     "title": "What is the threshold chosen by your financial experts of assessing the materiality of 3 mid-term financial opportunities?",
                     "type": "text",
                     "triggerOption": "3 mid-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-2-3-3",
                     "title": "How do you assess the likelihood of this 3 mid-term financial opportunity realizing within the next year?",
                     "type": "text",
                     "triggerOption": "3 mid-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-2-3-4",
                     "title": "What is the 3 mid-term financial opportunity relation in climate change adaptation?",
                     "type": "text",
                     "triggerOption": "3 mid-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-2-3-5",
                     "title": "Give a title to the financial opportunity. ",
                     "type": "text",
                     "triggerOption": "3 mid-term opportunity",
                     "required": true,
                     "description": "Please keep the opportunity title concise"
                  },
                  {
                     "id": "q7-opt-2-3-6",
                     "title": "Based on the chosen financial threshold, what is the magnitude of the 3 mid-term opportunity?",
                     "type": "multiple-choice",
                     "triggerOption": "3 mid-term opportunity",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Insignificant" },
                        { "id": "opt2", "text": "Negligible" },
                        { "id": "opt3", "text": "Moderate" },
                        { "id": "opt4", "text": "Externsive" },
                        { "id": "opt5", "text": "Significant" }
                     ]
                  },
                  {
                     "id": "q7-opt-2-3-7",
                     "title": "What is the potential likelihood of these 3 mid-term financial opportunity realizing in the next two to five years?",
                     "type": "multiple-choice",
                     "triggerOption": "3 mid-term opportunity",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very low" },
                        { "id": "opt2", "text": "Low" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "High" },
                        { "id": "opt5", "text": "Very High" }
                     ]
                  },
                  {
                     "id": "q7-opt-2-3-8",
                     "title": "Third Medium Term Financial opportunity – Score",
                     "type": "text",
                     "triggerOption": "3 mid-term opportunity",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q7-opt-2-3-9",
                     "title": "Describe the second mid-term financial opportunity in detail.",
                     "type": "text",
                     "triggerOption": "3 mid-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-2-3-10",
                     "title": "What is the threshold chosen by your financial experts of assessing the materiality of 3 mid-term financial opportunities?",
                     "type": "text",
                     "triggerOption": "3 mid-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-2-3-11",
                     "title": "How do you assess the likelihood of this 3 mid-term financial opportunity realizing within the next year?",
                     "type": "text",
                     "triggerOption": "3 mid-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-2-3-12",
                     "title": "What is the 3 mid-term financial opportunity relation in climate change adaptation?",
                     "type": "text",
                     "triggerOption": "3 mid-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-2-3-13",
                     "title": "Give a title to the financial opportunity. ",
                     "type": "text",
                     "triggerOption": "3 mid-term opportunity",
                     "required": true,
                     "description": "Please keep the opportunity title concise"
                  },
                  {
                     "id": "q7-opt-2-3-14",
                     "title": "Based on the chosen financial threshold, what is the magnitude of the 3 mid-term opportunity?",
                     "type": "multiple-choice",
                     "triggerOption": "3 mid-term opportunity",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Insignificant" },
                        { "id": "opt2", "text": "Negligible" },
                        { "id": "opt3", "text": "Moderate" },
                        { "id": "opt4", "text": "Externsive" },
                        { "id": "opt5", "text": "Significant" }
                     ]
                  },
                  {
                     "id": "q7-opt-2-3-15",
                     "title": "What is the potential likelihood of these 3 mid-term financial opportunity realizing in the next two to five years?",
                     "type": "multiple-choice",
                     "triggerOption": "3 mid-term opportunity",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very low" },
                        { "id": "opt2", "text": "Low" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "High" },
                        { "id": "opt5", "text": "Very High" }
                     ]
                  },
                  {
                     "id": "q7-opt-2-3-16",
                     "title": "Third Medium Term Financial opportunity – Score",
                     "type": "text",
                     "triggerOption": "3 mid-term opportunity",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q7-opt-2-3-17",
                     "title": "Describe the third mid-term financial opportunity in detail.",
                     "type": "text",
                     "triggerOption": "3 mid-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-2-3-18",
                     "title": "What is the threshold chosen by your financial experts of assessing the materiality of 3 mid-term financial opportunities?",
                     "type": "text",
                     "triggerOption": "3 mid-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-2-3-19",
                     "title": "How do you assess the likelihood of this 3 mid-term financial opportunity realizing within the next year?",
                     "type": "text",
                     "triggerOption": "3 mid-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-2-3-20",
                     "title": "What is the 3 mid-term financial opportunity relation in climate change adaptation?",
                     "type": "text",
                     "triggerOption": "3 mid-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-2-3-21",
                     "title": "Give a title to the financial opportunity. ",
                     "type": "text",
                     "triggerOption": "3 mid-term opportunity",
                     "required": true,
                     "description": "Please keep the opportunity title concise"
                  },
                  {
                     "id": "q7-opt-2-3-22",
                     "title": "Based on the chosen financial threshold, what is the magnitude of the 3 mid-term opportunity?",
                     "type": "multiple-choice",
                     "triggerOption": "3 mid-term opportunity",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Insignificant" },
                        { "id": "opt2", "text": "Negligible" },
                        { "id": "opt3", "text": "Moderate" },
                        { "id": "opt4", "text": "Externsive" },
                        { "id": "opt5", "text": "Significant" }
                     ]
                  },
                  {
                     "id": "q7-opt-2-3-23",
                     "title": "What is the potential likelihood of these 3 mid-term financial opportunity realizing in the next two to five years?",
                     "type": "multiple-choice",
                     "triggerOption": "3 mid-term opportunity",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very low" },
                        { "id": "opt2", "text": "Low" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "High" },
                        { "id": "opt5", "text": "Very High" }
                     ]
                  },
                  {
                     "id": "q7-opt-2-3-24",
                     "title": "Third Medium Term Financial opportunity – Score",
                     "type": "text",
                     "triggerOption": "3 mid-term opportunity",
                     "required": true,
                     "description": "END"
                  },
               ],
            },
            {
               "id": "q7-opt-3-1",
               "title": "How many long-term financial opportunities have you identified?",
               "type": "multiple-choice",
               "required": true,
               "triggerOption": "Yes: in long-term (<1 year)",
               "options": [
                  { "id": "opt1", "text": "1 long-term opportunity" },
                  { "id": "opt2", "text": "2 long-term opportunity" },
                  { "id": "opt3", "text": "3 long-term opportunity" },
               ],
               subQuestions: [
                  {
                     "id": "q7-opt-3-1-1",
                     "title": "Describe the first long-term financial opportunity in detail.",
                     "type": "text",
                     "triggerOption": "1 long-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-3-1-2",
                     "title": "What is the threshold chosen by your financial experts of assessing the materiality of long-term financial opportunities?",
                     "type": "text",
                     "triggerOption": "1 long-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-3-1-3",
                     "title": "How do you assess the likelihood of this long-term financial opportunity realizing within the next year?",
                     "type": "text",
                     "triggerOption": "1 long-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-3-1-4",
                     "title": "What is the long-term financial opportunity relation in climate change adaptation?",
                     "type": "text",
                     "triggerOption": "1 long-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-3-1-5",
                     "title": "Give a title to the financial opportunity. ",
                     "type": "text",
                     "triggerOption": "1 long-term opportunity",
                     "required": true,
                     "description": "Please keep the opportunity title concise"
                  },
                  {
                     "id": "q7-opt-3-1-6",
                     "title": "Based on the chosen financial threshold, what is the magnitude of the long-term opportunity?",
                     "type": "multiple-choice",
                     "triggerOption": "1 long-term opportunity",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Insignificant" },
                        { "id": "opt2", "text": "Negligible" },
                        { "id": "opt3", "text": "Moderate" },
                        { "id": "opt4", "text": "Externsive" },
                        { "id": "opt5", "text": "Significant" }
                     ]
                  },
                  {
                     "id": "q7-opt-3-1-7",
                     "title": "What is the potential likelihood of these long-term financial opportunity realizing in the next two to five years?",
                     "type": "multiple-choice",
                     "triggerOption": "1 long-term opportunity",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very low" },
                        { "id": "opt2", "text": "Low" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "High" },
                        { "id": "opt5", "text": "Very High" }
                     ]
                  },
                  {
                     "id": "q7-opt-3-1-8",
                     "title": "Long Term Financial opportunity – Score",
                     "type": "text",
                     "triggerOption": "1 long-term opportunity",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q7-opt-3-2-1",
                     "title": "Describe the first long-term financial opportunity in detail.",
                     "type": "text",
                     "triggerOption": "2 long-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-3-2-2",
                     "title": "What is the threshold chosen by your financial experts of assessing the materiality of long-term financial opportunities?",
                     "type": "text",
                     "triggerOption": "2 long-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-3-2-3",
                     "title": "How do you assess the likelihood of this long-term financial opportunity realizing within the next year?",
                     "type": "text",
                     "triggerOption": "2 long-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-3-2-4",
                     "title": "What is the long-term financial opportunity relation in climate change adaptation?",
                     "type": "text",
                     "triggerOption": "2 long-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-3-2-5",
                     "title": "Give a title to the financial opportunity. ",
                     "type": "text",
                     "triggerOption": "2 long-term opportunity",
                     "required": true,
                     "description": "Please keep the opportunity title concise"
                  },
                  {
                     "id": "q7-opt-3-2-6",
                     "title": "Based on the chosen financial threshold, what is the magnitude of the long-term opportunity?",
                     "type": "multiple-choice",
                     "triggerOption": "2 long-term opportunity",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Insignificant" },
                        { "id": "opt2", "text": "Negligible" },
                        { "id": "opt3", "text": "Moderate" },
                        { "id": "opt4", "text": "Externsive" },
                        { "id": "opt5", "text": "Significant" }
                     ]
                  },
                  {
                     "id": "q7-opt-3-2-7",
                     "title": "What is the potential likelihood of these long-term financial opportunity realizing in the next two to five years?",
                     "type": "multiple-choice",
                     "triggerOption": "2 long-term opportunity",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very low" },
                        { "id": "opt2", "text": "Low" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "High" },
                        { "id": "opt5", "text": "Very High" }
                     ]
                  },
                  {
                     "id": "q7-opt-3-2-8",
                     "title": "Second Long Term Financial opportunity – Score",
                     "type": "text",
                     "triggerOption": "2 long-term opportunity",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q7-opt-3-2-9",
                     "title": "Describe the second long-term financial opportunity in detail.",
                     "type": "text",
                     "triggerOption": "2 long-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-3-2-10",
                     "title": "What is the threshold chosen by your financial experts of assessing the materiality of long-term financial opportunities?",
                     "type": "text",
                     "triggerOption": "2 long-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-3-2-11",
                     "title": "How do you assess the likelihood of this long-term financial opportunity realizing within the next year?",
                     "type": "text",
                     "triggerOption": "2 long-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-3-2-12",
                     "title": "What is the long-term financial opportunity relation in climate change adaptation?",
                     "type": "text",
                     "triggerOption": "2 long-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-3-2-13",
                     "title": "Give a title to the financial opportunity. ",
                     "type": "text",
                     "triggerOption": "2 long-term opportunity",
                     "required": true,
                     "description": "Please keep the opportunity title concise"
                  },
                  {
                     "id": "q7-opt-3-2-14",
                     "title": "Based on the chosen financial threshold, what is the magnitude of the long-term opportunity?",
                     "type": "multiple-choice",
                     "triggerOption": "2 long-term opportunity",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Insignificant" },
                        { "id": "opt2", "text": "Negligible" },
                        { "id": "opt3", "text": "Moderate" },
                        { "id": "opt4", "text": "Externsive" },
                        { "id": "opt5", "text": "Significant" }
                     ]
                  },
                  {
                     "id": "q7-opt-3-2-15",
                     "title": "What is the potential likelihood of these long-term financial opportunity realizing in the next two to five years?",
                     "type": "multiple-choice",
                     "triggerOption": "2 long-term opportunity",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very low" },
                        { "id": "opt2", "text": "Low" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "High" },
                        { "id": "opt5", "text": "Very High" }
                     ]
                  },
                  {
                     "id": "q7-opt-3-2-16",
                     "title": "Second Long Term Financial opportunity – Score",
                     "type": "text",
                     "triggerOption": "2 long-term opportunity",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q7-opt-3-3-1",
                     "title": "Describe the first long-term financial opportunity in detail.",
                     "type": "text",
                     "triggerOption": "3 long-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-3-3-2",
                     "title": "What is the threshold chosen by your financial experts of assessing the materiality of 3 long-term financial opportunities?",
                     "type": "text",
                     "triggerOption": "3 long-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-3-3-3",
                     "title": "How do you assess the likelihood of this 3 long-term financial opportunity realizing within the next year?",
                     "type": "text",
                     "triggerOption": "3 long-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-3-3-4",
                     "title": "What is the 3 long-term financial opportunity relation in climate change adaptation?",
                     "type": "text",
                     "triggerOption": "3 long-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-3-3-5",
                     "title": "Give a title to the financial opportunity. ",
                     "type": "text",
                     "triggerOption": "3 long-term opportunity",
                     "required": true,
                     "description": "Please keep the opportunity title concise"
                  },
                  {
                     "id": "q7-opt-3-3-6",
                     "title": "Based on the chosen financial threshold, what is the magnitude of the 3 long-term opportunity?",
                     "type": "multiple-choice",
                     "triggerOption": "3 long-term opportunity",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Insignificant" },
                        { "id": "opt2", "text": "Negligible" },
                        { "id": "opt3", "text": "Moderate" },
                        { "id": "opt4", "text": "Externsive" },
                        { "id": "opt5", "text": "Significant" }
                     ]
                  },
                  {
                     "id": "q7-opt-3-3-7",
                     "title": "What is the potential likelihood of these 3 long-term financial opportunity realizing in the next two to five years?",
                     "type": "multiple-choice",
                     "triggerOption": "3 long-term opportunity",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very low" },
                        { "id": "opt2", "text": "Low" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "High" },
                        { "id": "opt5", "text": "Very High" }
                     ]
                  },
                  {
                     "id": "q7-opt-3-3-8",
                     "title": "Third Long Term Financial opportunity – Score",
                     "type": "text",
                     "triggerOption": "3 long-term opportunity",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q7-opt-3-3-9",
                     "title": "Describe the second long-term financial opportunity in detail.",
                     "type": "text",
                     "triggerOption": "3 long-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-3-3-10",
                     "title": "What is the threshold chosen by your financial experts of assessing the materiality of 3 long-term financial opportunities?",
                     "type": "text",
                     "triggerOption": "3 long-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-3-3-11",
                     "title": "How do you assess the likelihood of this 3 long-term financial opportunity realizing within the next year?",
                     "type": "text",
                     "triggerOption": "3 long-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-3-3-12",
                     "title": "What is the 3 long-term financial opportunity relation in climate change adaptation?",
                     "type": "text",
                     "triggerOption": "3 long-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-3-3-13",
                     "title": "Give a title to the financial opportunity. ",
                     "type": "text",
                     "triggerOption": "3 long-term opportunity",
                     "required": true,
                     "description": "Please keep the opportunity title concise"
                  },
                  {
                     "id": "q7-opt-3-3-14",
                     "title": "Based on the chosen financial threshold, what is the magnitude of the 3 long-term opportunity?",
                     "type": "multiple-choice",
                     "triggerOption": "3 long-term opportunity",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Insignificant" },
                        { "id": "opt2", "text": "Negligible" },
                        { "id": "opt3", "text": "Moderate" },
                        { "id": "opt4", "text": "Externsive" },
                        { "id": "opt5", "text": "Significant" }
                     ]
                  },
                  {
                     "id": "q7-opt-3-3-15",
                     "title": "What is the potential likelihood of these 3 long-term financial opportunity realizing in the next two to five years?",
                     "type": "multiple-choice",
                     "triggerOption": "3 long-term opportunity",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very low" },
                        { "id": "opt2", "text": "Low" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "High" },
                        { "id": "opt5", "text": "Very High" }
                     ]
                  },
                  {
                     "id": "q7-opt-3-3-16",
                     "title": "Third Long Term Financial opportunity – Score",
                     "type": "text",
                     "triggerOption": "3 long-term opportunity",
                     "required": true,
                     "description": "END"
                  },
                  {
                     "id": "q7-opt-3-3-17",
                     "title": "Describe the third long-term financial opportunity in detail.",
                     "type": "text",
                     "triggerOption": "3 long-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-3-3-18",
                     "title": "What is the threshold chosen by your financial experts of assessing the materiality of 3 long-term financial opportunities?",
                     "type": "text",
                     "triggerOption": "3 long-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-3-3-19",
                     "title": "How do you assess the likelihood of this 3 long-term financial opportunity realizing within the next year?",
                     "type": "text",
                     "triggerOption": "3 long-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-3-3-20",
                     "title": "What is the 3 long-term financial opportunity relation in climate change adaptation?",
                     "type": "text",
                     "triggerOption": "3 long-term opportunity",
                     "required": true
                  },
                  {
                     "id": "q7-opt-3-3-21",
                     "title": "Give a title to the financial opportunity. ",
                     "type": "text",
                     "triggerOption": "3 long-term opportunity",
                     "required": true,
                     "description": "Please keep the opportunity title concise"
                  },
                  {
                     "id": "q7-opt-3-3-22",
                     "title": "Based on the chosen financial threshold, what is the magnitude of the 3 long-term opportunity?",
                     "type": "multiple-choice",
                     "triggerOption": "3 long-term opportunity",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Insignificant" },
                        { "id": "opt2", "text": "Negligible" },
                        { "id": "opt3", "text": "Moderate" },
                        { "id": "opt4", "text": "Externsive" },
                        { "id": "opt5", "text": "Significant" }
                     ]
                  },
                  {
                     "id": "q7-opt-3-3-23",
                     "title": "What is the potential likelihood of these 3 long-term financial opportunity realizing in the next two to five years?",
                     "type": "multiple-choice",
                     "triggerOption": "3 long-term opportunity",
                     "required": true,
                     "options": [
                        { "id": "opt1", "text": "Very low" },
                        { "id": "opt2", "text": "Low" },
                        { "id": "opt3", "text": "Medium" },
                        { "id": "opt4", "text": "High" },
                        { "id": "opt5", "text": "Very High" }
                     ]
                  },
                  {
                     "id": "q7-opt-3-3-24",
                     "title": "Third Long Term Financial opportunity – Score",
                     "type": "text",
                     "triggerOption": "3 long-term opportunity",
                     "required": true,
                     "description": "END"
                  },
               ],
            },
         ],
      },
   ]
  },
  {
    id: 'climate_change_energy',
    topic: 'Environment',
    title: 'Energy Efficiency',
    questions: [
      {
        id: 'ce_q1',
        title: 'What is your current energy consumption baseline?',
        type: 'text',
        required: true,
      },
      {
        id: 'ce_q2',
        title: 'Which energy efficiency measures have been implemented?',
        type: 'multiple-choice',
        required: true,
        options: [
          { id: 'opt1', text: 'Building retrofits' },
          { id: 'opt2', text: 'Process optimization' },
          { id: 'opt3', text: 'Equipment upgrades' },
          { id: 'opt4', text: 'Behavioral changes' },
        ],
      },
      {
        id: 'ce_q3',
        title: 'What percentage reduction in energy consumption have you achieved?',
        type: 'multiple-choice',
        required: true,
        options: [
          { id: 'opt1', text: 'Less than 10%' },
          { id: 'opt2', text: '10-25%' },
          { id: 'opt3', text: '26-50%' },
          { id: 'opt4', text: 'More than 50%' },
        ],
      }
    ]
  },
  {
    id: 'climate_change_emissions',
    topic: 'Environment',
    title: 'Emissions Reporting',
    questions: [
      {
        id: 'er_q1',
        title: 'Which scope of emissions do you currently measure?',
        type: 'multiple-choice',
        required: true,
        options: [
          { id: 'opt1', text: 'Scope 1' },
          { id: 'opt2', text: 'Scope 2' },
          { id: 'opt3', text: 'Scope 3' },
          { id: 'opt4', text: 'All of the above' },
        ],
      },
      {
        id: 'er_q2',
        title: 'Describe your emissions calculation methodology.',
        type: 'text',
        required: true,
      }
    ]
  }
];