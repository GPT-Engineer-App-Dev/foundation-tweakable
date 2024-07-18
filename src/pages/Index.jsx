import React from 'react';
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow text-center">
        <h1 className="text-3xl mt-8">Your Blank Canvas</h1>
        <p className="mt-4">Chat with the agent to start making edits.</p>
      </main>
      <footer className="bg-gray-100 py-6 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-600">&copy; 2023 Your Company. All rights reserved.</p>
            <div className="space-x-4">
              <Button variant="ghost" size="sm">About</Button>
              <Button variant="ghost" size="sm">Contact</Button>
              <Button variant="ghost" size="sm">Privacy Policy</Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;