// store/csrdStore.ts
import { create } from 'zustand'
import { questionsData } from '@/app/utils/question'

interface CSRDStore {
  selectedTopic: string
  selectedTitle: string
  selectedQuestionId: string | null
  setSelectedTopic: (topic: string) => void
  setSelectedTitle: (title: string) => void
  setTopicAndTitle: (topic: string, title: string) => void
  setSelectedQuestionId: (id: string | null) => void
  currentQuestions: () => any[]
}

export const useCSRDStore = create<CSRDStore>((set, get) => ({
  selectedTopic: questionsData[0]?.topic || '',
  selectedTitle: questionsData[0]?.title || '',
  selectedQuestionId: null,
  
  setSelectedTopic: (topic) => set({ selectedTopic: topic }),
  setSelectedTitle: (title) => set({ selectedTitle: title }),
  setTopicAndTitle: (topic, title) => set({ selectedTopic: topic, selectedTitle: title }),
  setSelectedQuestionId: (id) => set({ selectedQuestionId: id }),
  
  currentQuestions: () => {
    const { selectedTopic, selectedTitle } = get()
    return questionsData.find(
      category => category.topic === selectedTopic && category.title === selectedTitle
    )?.questions || []
  }
}))