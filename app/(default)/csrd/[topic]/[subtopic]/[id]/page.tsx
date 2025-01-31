"use client";
import { QuestionPage } from "@/components/QuestionPage";
import { useRouter } from "next/navigation";
import { Card } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Progress } from "@nextui-org/react";

// Define types for our data structures
interface QuestionOption {
  id: string;
  text: string;
}

interface Question {
  id: string;
  title: string;
  type: "multiple-choice" | "text";
  required: boolean;
  options: QuestionOption[];
}
const questionsByTopic: Record<string, Question[]> = {
  'climate-change': [
    {
      id: 'q1',
      title: 'Which climate change matters are relevant for your business and need to be assessed?',
      type: 'multiple-choice',
      required: true,
      options: [
        { id: 'opt1', text: 'Climate change adaptation' },
        { id: 'opt2', text: 'Climate change mitigation' },
        { id: 'opt3', text: 'Energy' },
        { id: 'opt4', text: 'None' }
      ],
    }
  ],
  'pollution': [
    {
      id: 'q2',
      title: 'Which Pollution matters are relevant for your business and need to be assessed?',
      type: 'multiple-choice',
      required: true,
      options: [
        { id: 'opt1', text: 'Pollution of air' },
        { id: 'opt2', text: 'Pollution of water' },
        { id: 'opt3', text: 'Pollution of soil' },
        { id: 'opt4', text: 'Pollution of living organisms and food resources' },
        { id: 'opt5', text: 'Substances of concern' },
        { id: 'opt6', text: 'Substances of very high concern' },
        { id: 'opt7', text: 'Microplastics' },
        { id: 'opt8', text: 'None' }
      ],
    }
  ],
  'water-marine': [
    {
      id: 'q3',
      title: 'Which Water and marine resources matters are relevant for your business and need to be assessed?',
      type: 'multiple-choice',
      required: true,
      options: [
        { id: 'opt1', text: 'Water' },
        { id: 'opt2', text: 'Marine resources' },
        { id: 'opt3', text: 'None' }
      ],
    }
  ],
  'biodiversity': [
    {
      id: 'q4',
      title: 'Which Biodiversity and ecosystems are relevant for your business and need to be assessed?',
      type: 'text',
      required: true,
      options: [
        { id: 'opt1', text: 'Direct impact drivers of biodiversity loss' },
        { id: 'opt2', text: 'Impacts on the state of species' },
        { id: 'opt3', text: 'Impacts on the extent and condition of ecosystems' },
        { id: 'opt4', text: 'Impacts and dependencies on ecosystem services' },
        { id: 'opt5', text: 'None' }
      ],
    }
  ],
  'circular-economy': [
    {
      id: 'q5',
      title: 'Which Resource use and circular economy are relevant for your business and need to be assessed?',
      type: 'multiple-choice',
      required: true,
      options: [
        { id: 'opt1', text: 'Resources inflows, including resource use' },
        { id: 'opt2', text: 'Resource outflows related to products and services' },
        { id: 'opt3', text: 'Waste' },
        { id: 'opt4', text: 'None' }
      ],
    }
  ],
  'business-conduct': [
    {
      id: "q6",
      title: "Which Business Conduct matters are relevant for your business and need to be assessed?",
      type: "multiple-choice",
      required: true,
      options: [
            { "id": "opt1", "text": "Corporate culture" },
            { "id": "opt2", "text": "Protection of whistle-blowers" },
            { "id": "opt3", "text": "Animal welfare" },
            { "id": "opt1", "text": "Political engagement" },
            { "id": "opt2", "text": "Management of relationships with suppliers including payment practices" },
            { "id": "opt3", "text": "Corruption and bribery" },
            { "id": "opt4", "text": "None" }
        ],
    },
  ],
  'affected-communities': [
    {
      id: 'q7',
      title: 'Which Affected communities and indigenous peoples matters are relevant for your business and need to be assessed?',
      type: 'multiple-choice',
      required: true,
      options: [
        { id: 'opt1', text: 'Indigenous peoples' },
        { id: 'opt2', text: 'Local communities' },
        { id: 'opt3', text: 'None' }
      ],
    }
  ],
  'consumer-and-end-user': [
    {
      id: 'q8',
      title: 'Which Consumer and end-user matters are relevant for your business and need to be assessed?',
      type: 'multiple-choice',
      required: true,
      options: [
        { id: 'opt1', text: 'Consumer health and safety' },
        { id: 'opt2', text: 'Consumer data protection and privacy' },
        { id: 'opt3', text: 'None' }
      ],
    }
  ],
  'own-workforce': [
    {
      id: 'q9',
      title: 'Which Own workforce matters are relevant for your business and need to be assessed?',
      type: 'multiple-choice',
      required: true,
      options: [
        { id: 'opt1', text: 'Health and safety' },
        { id: 'opt2', text: 'Diversity and equal opportunities' },
        { id: 'opt3', text: 'Training and development' },
        { id: 'opt4', text: 'None' }
      ],
    }
  ],
  'working-in-the-value-chain': [
    {
      id: 'q10',
      title: 'Which Working in the value chain matters are relevant for your business and need to be assessed?',
      type: 'multiple-choice',
      required: true,
      options: [
        { id: 'opt1', text: 'Supply chain management' },
        { id: 'opt2', text: 'Product responsibility' },
        { id: 'opt3', text: 'None' }
      ],
    }
  ],
};
interface PageProps {
  params: {
    id: string;
    subtopic: string;
    topic: string;
  };
}

// Add new interface for subtopic
interface Subtopic {
  id: string;
  name: string;
  progress: number;
  route: string;
}

// Add subtopics mapping
const subtopicsByTopic: Record<ValidTopicId, Subtopic[]> = {
  "climate-change": [
    {
      id: "adaptation",
      name: "Climate Change Adaptation",
      progress: 0,
      route: "/1",
    },
    {
      id: "mitigation",
      name: "Climate Change Mitigation",
      progress: 0,
      route: "/2",
    },
    { id: "energy", name: "Energy", progress: 0, route: "/3" },
  ],
  "pollution": [
    { id: "air", name: "Pollution of Air", progress: 0, route: "/1" },
    { id: "water", name: "Pollution of Water", progress: 0, route: "/2" },
    { id: "soil", name: "Pollution of Soil", progress: 0, route: "/3" },
    {
      id: "living",
      name: "Pollution of Living Organisms",
      progress: 0,
      route: "/4",
    },
    { id: "concern", name: "Substances of Concern", progress: 0, route: "/5" },
    {
      id: "high-concern",
      name: "Substances of Very High Concern",
      progress: 0,
      route: "/6",
    },
    { id: "microplastics", name: "Microplastics", progress: 0, route: "/7" },
  ],
  "water-marine": [
    { id: "water", name: "Water", progress: 0, route: "/1" },
    { id: "marine", name: "Marine Resources", progress: 0, route: "/2" },
  ],
  "biodiversity": [
    {
      id: "drivers",
      name: "Direct Impact Drivers of Biodiversity Loss",
      progress: 0,
      route: "/1",
    },
    {
      id: "species",
      name: "Impacts on the State of Species",
      progress: 0,
      route: "/2",
    },
    {
      id: "ecosystem",
      name: "Impacts on Extent and Condition of Ecosystems",
      progress: 0,
      route: "/3",
    },
    {
      id: "services",
      name: "Impacts and Dependencies on Ecosystem Services",
      progress: 0,
      route: "/4",
    },
  ],
  "circular-economy": [
    {
      id: "inflows",
      name: "Resource Inflows Including Resource Use",
      progress: 0,
      route: "/1",
    },
    {
      id: "outflows",
      name: "Resource Outflows Related to Products and Services",
      progress: 0,
      route: "/2",
    },
    { id: "waste", name: "Waste", progress: 0, route: "/3" },
  ],
  "business-conduct": [
    { id: "animal-welfare", name: "Animal Welfare", progress: 0, route: "/1" },
    { id: "corporate-culture", name: "Corporate Culture", progress: 0, route: "/2" },
    { id: "corruption-bribery", name: "Corruption and Bribery", progress: 0, route: "/3" },
    { id: "management-of-relationships", name: "Management of Relationships", progress: 0, route: "/4" },
    { id: "political-engagement", name: "Political Engagement", progress: 0, route: "/5" },
    { id: "protection-of-whistle-blowers", name: "Protection of Whistle-Blowers", progress: 0, route: "/6" },
  ],
  'affected-communities': [
    { id: 'community_civil_and_political_rights', name: 'Community Civil and Political Rights', progress: 0, route: '/1' },
    { id: 'communities_economic_social_and_cultural_rights', name: 'Communities Economic, Social and Cultural Rights', progress: 0, route: '/2' },
    { id: 'rights_of_indigenous_peoples', name: 'Rights of Indigenous Peoples', progress: 0, route: '/3' },
  ],
  'consumer-and-end-user': [
    { id: 'information_related_impacts_for_consumer_and_end_user', name: 'Information related impacts for consumer and end user', progress: 0, route: '/1' },
    { id: 'personal_safety_of_consumer_end_user', name: 'Personal Safety of Consumer/End User', progress: 0, route: '/2' },
    { id: 'Social_inclusion_of_consumers_and_or_end_users', name: 'Social inclusion of consumers and/or end-users', progress: 0, route: '/3' },
  ],
  'own-workforce': [
    { id: 'equal_treatment_and_oppurtunities', name: 'Equal treatment and opportunities for all', progress: 0, route: '/1' },
    { id: 'other_work_related_rights', name: 'other_work_related_rights', progress: 0, route: '/2' },
    { id: 'working_conditions', name: 'Working Conditions', progress: 0, route: '/3' },
  ],
  'working-in-the-value-chain': [
    { id: 'equal-treatment-and-oppurtunities-for-all', name: 'equal treatment and oppurtunities for all', progress: 0, route: '/1' },
    { id: 'other_work_related_rights', name: 'other work related rights', progress: 0, route: '/2' },
    { id: 'working_conditions', name: 'working conditions', progress: 0, route: '/3' },
  ],
};

// Define valid topic IDs
const validIds = [
  "climate-change",
  "pollution",
  "water-marine",
  "circular-economy",
  "biodiversity",
  "business-conduct",
  "affected-communities",
  "consumer-and-end-user",
  "own-workforce",
  "working-in-the-value-chain",
] as const;

type ValidTopicId = (typeof validIds)[number];

export default function EnvironmentPage({ params }: PageProps) {
  // Type guard to check if the ID is valid
  const isValidId = (id: string): id is ValidTopicId => {
    return validIds.includes(id as ValidTopicId);
  };

  // Validate the ID and return error component if invalid
  if (!isValidId(params.id)) {
    return <div className="p-6 text-red-600">Invalid  topic</div>;
  }

  const subtopics = subtopicsByTopic[params.id];
  const router = useRouter();

  const handleContinue = (route: string) => {
    router.push(`/csrd/${params.topic}/${params.subtopic}/${params.id}${route}`);
  };
  if (!isValidId(params.id)) {
    return (
      <div className="p-6 text-red-600">
        Invalid environment topic
      </div>
    );
  }
  const topicQuestions = questionsByTopic[params.id];

  return (
    <div className="p-6">
      <QuestionPage id={params.id} 
      questions={topicQuestions} />
      <div className="mt-8 space-y-6">
        {subtopics.map((subtopic) => (
          <Card key={subtopic.id} className="bg-white dark:bg-gray-800 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium">{subtopic.name}</h2>
              <Button
                color="success"
                onClick={() => handleContinue(subtopic.route)}
                variant="flat"
              >
                Continue
              </Button>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>{subtopic.id}</span>
                <span>{subtopic.progress}%</span>
              </div>
              <Progress
                value={subtopic.progress}
                color="success"
                className="h-2"
              />
              <div className="pt-4 text-sm">
                <span>0/0 Questions</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
