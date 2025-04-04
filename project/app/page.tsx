"use client";

import { Github, Mail, Phone, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100">
      {/* Blurred top bar */}
      <div className="fixed top-0 w-full backdrop-blur-md bg-white/30 z-50 p-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Kartik Jangid</h1>
          <div className="flex gap-4">
            <a href="mailto:kj.0222@outlook.com" className="flex items-center gap-2 text-sm hover:text-gray-600">
              <Mail size={16} />
              kj.0222@outlook.com
            </a>
            <a href="tel:+918302020489" className="flex items-center gap-2 text-sm hover:text-gray-600">
              <Phone size={16} />
              +91 8302020489
            </a>
            <a href="https://github.com" className="flex items-center gap-2 text-sm hover:text-gray-600">
              <Github size={16} />
              Github
            </a>
            <div className="flex items-center gap-2 text-sm">
              <MapPin size={16} />
              Pilani, India
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto pt-24 p-6">
        <Card className="p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Objective</h2>
          <p className="text-gray-700">
            Seeking a challenging career in the field of Software Design and Development.
          </p>
        </Card>

        <Card className="p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Education</h2>
          <div className="mb-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">Bachelor of Technology | CSE</h3>
                <p className="text-gray-600">BKBIET, Pilani</p>
              </div>
              <p className="text-gray-600">2021 – 2025</p>
            </div>
            <p className="text-gray-700 mt-2">
              Co-Ordinator of College's Annual Inter College Sports Tournament 2023, 2024
            </p>
          </div>
        </Card>

        <Card className="p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Experience</h2>
          
          <div className="mb-8">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-medium">Research Project: OS-C – A Browser-Based Operating System</h3>
              <p className="text-gray-600">2025</p>
            </div>
            <p className="text-gray-600 mb-2">Guide: Dr. Nimish Kumar, Associate Professor and Head of Department CSE, BKBIET, Pilani</p>
            <p className="text-gray-700 mb-4">Purpose: To implement traditional OS concepts on top of web technologies, using the browser as "hardware."</p>
            <div className="mb-4">
              <h4 className="font-medium mb-2">Key Contributions:</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Developed a Hardware Abstraction Layer (HAL) to interface with browser APIs, manage memory, and implement a canvas-based display system.</li>
                <li>Built a Kernel Layer featuring a process scheduler, memory manager, and system call interface.</li>
                <li>Designed a User Space with a shell interface and support for user programs.</li>
                <li>Implemented a page-based virtual memory system with basic memory protection and virtual memory mapping.</li>
                <li>Developed a process management system supporting process states and process creation/termination.</li>
              </ul>
            </div>
            <div className="flex gap-2 flex-wrap">
              {["Rust", "WebAssembly", "HTML5 Canvas", "IndexedDB"].map((tech) => (
                <Badge key={tech} variant="secondary">{tech}</Badge>
              ))}
            </div>
          </div>

          <Separator className="my-6" />

          <div className="mb-8">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-medium">Software Engineer Intern | Shreeva</h3>
              <p className="text-gray-600">Sep 2024 – Nov 2024</p>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Angular & iOS Development: Fixed bugs in Angular applications and collaborated with the team to develop an iOS app prototype.</li>
              <li>Restaurant App (Shreeva): Contributed to building a restaurant food supply app, enhancing end-to-end operational workflows.</li>
              <li>Cross-Platform Development: Developed a cross-platform wallpaper app using React Native (Expo) integrated with AWS Amplify.</li>
              <li>AWS & Data Management: Implemented CRUD functionality with AWS Amplify and DynamoDB; integrated AWS S3 for image storage.</li>
              <li>API & UI Integration: Leveraged GraphQL API for efficient data fetching and utilized React Native UI components.</li>
            </ul>
          </div>
        </Card>

        <Card className="p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Technical Skills</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Programming Languages</h3>
              <div className="flex gap-2 flex-wrap">
                {["Rust", "C", "Python", "Solidity", "TypeScript"].map((lang) => (
                  <Badge key={lang} variant="outline">{lang}</Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-2">Dev Tools & Frameworks</h3>
              <div className="flex gap-2 flex-wrap">
                {[
                  "Xcode", "WASM", "Ionic-Capacitor", "Android Studio", "Angular",
                  "AWS Amplify", "Linux", "Git", "Docker", "Podman", "Ollama-AI",
                  "Firebase", "React", "Next.js", "Canva"
                ].map((tool) => (
                  <Badge key={tool} variant="outline">{tool}</Badge>
                ))}
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Certifications</h2>
          <ul className="space-y-2 text-gray-700">
            <li>Ethereum with Solidity, React & Next.js - 2024 | Udemy</li>
            <li>Rust Programming - 2023 | Udemy</li>
          </ul>
        </Card>
      </div>
    </div>
  );
}