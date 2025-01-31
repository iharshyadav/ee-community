'use client'

import { useState } from 'react'
import { BarChart2, MessageSquare, Globe } from 'lucide-react'
import { Button, Card, Progress } from '@nextui-org/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function DashboardPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('overview')
  const handleContinue = (route:string) => {
    if(route === 'materiality') router.push(`csrd/${route}/environment/climate-change`);
    if(route === 'governance') router.push(`csrd/${route}/governance/business-conduct`);
    if(route === 'social') router.push(`csrd/${route}/social/affected-communities`);
    if(route === 'environment') router.push(`csrd/${route}/environment/climate-change`);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">

      {/* Navigation */}
      <nav className="flex items-center gap-6 px-6 py-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <button
          onClick={() => setActiveTab('overview')}
          className={`flex items-center gap-2 px-2 py-1 text-sm ${
            activeTab === 'overview' ? 'text-black dark:text-green-400' : 'text-gray-500 dark:text-gray-400'
          }`}
        >
          <BarChart2 className="w-4 h-4" />
          Overview
        </button>
        <button
          onClick={() => setActiveTab('comments')}
          className={`flex items-center gap-2 px-2 py-1 text-sm ${
            activeTab === 'comments' ? 'text-black dark:text-green-400' : 'text-gray-500 dark:text-gray-400'
          }`}
        >
          <MessageSquare className="w-4 h-4" />
          Comments
        </button>
        <button
          onClick={() => setActiveTab('assistant')}
          className={`flex items-center gap-2 px-2 py-1 text-sm ${
            activeTab === 'assistant' ? 'text-black dark:text-green-400' : 'text-gray-500 dark:text-gray-400'
          }`}
        >
          <Globe className="w-4 h-4" />
          Assistant
        </button>
      </nav>

      <main className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Progress Section */}
          <Card className="bg-white dark:bg-gray-800 p-6">
            <h2 className="text-lg font-medium mb-6">Progress</h2>
            <div className="text-4xl font-bold mb-8 text-black dark:text-green-400">23%</div>
            
            <div className="space-y-6">
              {[
                { name: 'Double materiality assesment', progress: 80 },
                { name: 'General', progress: 70 },
                { name: 'Environmental', progress: 60 },
                { name: 'Social', progress: 50 },
                { name: 'Governance', progress: 70 },
              ].map((item) => (
                <div key={item.name}>
                  <div className="flex justify-between text-sm mb-2">
                    <span>{item.name}</span>
                    <span>{item.progress}%</span>
                  </div>
                  <Progress 
                    value={item.progress} 
                    color="success"
                    className="h-2"
                  />
                </div>
              ))}
            </div>
          </Card>

          {/* Learning Point Section */}
          <Card className="bg-white dark:bg-gray-800 p-6">
            <h2 className="text-lg font-medium mb-4">Learning point</h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">To kickstart your report</p>
            
            <div className="space-y-4">
              {[
                'Document -1',
                'Document -2',
                'Document -3',
                'Document -4',
              ].map((doc) => (
                <div
                  key={doc}
                  className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer"
                >
                  {doc}
                </div>
              ))}
            </div>
            
            <button className="text-green-500 dark:text-green-400 text-sm mt-4 hover:text-green-600 dark:hover:text-green-300">
              View all »
            </button>
          </Card>
        </div>

        {/* Assessment Sections */}
        <div className="mt-6 space-y-6">
          <Card className="bg-white dark:bg-gray-800 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium">Double materiality assessment</h2>
              <Button color="success" onClick={() => handleContinue('materiality')} variant="flat">
                Continue
              </Button>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>DMA - es -1</span>
                <span>40%</span>
              </div>
              <Progress 
                value={40} 
                color="success"
                className="h-2"
                />
                <div className="pt-4 text-sm">
                <span >40/60 Questions</span>
                </div>
            </div>
          </Card>

          <Card className="bg-white dark:bg-gray-800 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium">Environment</h2>
              <Button color="success" onClick={()=> handleContinue('environment')} variant="flat">
                Continue
              </Button>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Es-1</span>
                <span>45%</span>
              </div>
              <Progress 
                value={45} 
                color="success"
                className="h-2"
                />
                <div className="pt-4 text-sm">
                <span >45/60 Questions</span>
                </div>
            </div>
          </Card>
          <Card className="bg-white dark:bg-gray-800 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium">Social</h2>
              <Button color="success" onClick={()=>handleContinue('social')} variant="flat">
                Continue
              </Button>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Es-1</span>
                <span>65%</span>
              </div>
              <Progress 
                value={65} 
                color="success"
                className="h-2"
                />
                <div className="pt-4 text-sm">
                <span >45/60 Questions</span>
                </div>
            </div>
          </Card>
          <Card className="bg-white dark:bg-gray-800 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium">Governance</h2>
              <Button color="success" onClick={()=> handleContinue('governance')} variant="flat">
                Continue
              </Button>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Es-1</span>
                <span>45%</span>
              </div>
              <Progress 
                value={45} 
                color="success"
                className="h-2"
                />
                <div className="pt-4 text-sm">
                <span >45/60 Questions</span>
                </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}

