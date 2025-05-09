"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"

type Message = {
  id: number
  text: string
  sender: "user" | "agent"
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "¡Hola! Soy Fundi, el asistente virtual de Funder. ¿En qué puedo ayudarte hoy?",
      sender: "agent",
    },
    {
      id: 2,
      text: "Puedo explicarte cómo funciona nuestra plataforma, ayudarte a elegir entre crowdlending y crowdfunding, o responder cualquier duda que tengas.",
      sender: "agent",
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [sessionId, setSessionId] = useState<string>("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let sid = localStorage.getItem("funderSessionId")
    if (!sid) {
      sid = crypto.randomUUID()
      localStorage.setItem("funderSessionId", sid)
    }
    setSessionId(sid)
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
    }

    setMessages((prev) => [...prev, userMessage])
    setIsLoading(true)
    setInputValue("")

    try {
      const response = await fetch(
        `https://n8n.tucbbs.com.ar/webhook/101d81c2-0d9a-4d5f-a190-c76de5aebe86/chat?sessionId=${sessionId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            sessionId,
            message: userMessage.text,
          }),
        },
      )

      const data = await response.json()

      const agentMessage: Message = {
        id: messages.length + 2,
        text: data?.reply || "Gracias por tu mensaje. En breve te respondemos.",
        sender: "agent",
      }

      setMessages((prev) => [...prev, agentMessage])
    } catch (error) {
      console.error("Error enviando a n8n:", error)
      setMessages((prev) => [
        ...prev,
        {
          id: messages.length + 2,
          text: "No pudimos conectar con el servidor. Intentá más tarde.",
          sender: "agent",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="flex flex-col h-[400px] rounded-xl overflow-hidden bg-gray-900/50 backdrop-blur-sm border border-gray-800">
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-4">
          {messages.map((m) => (
            <div key={m.id} className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                  m.sender === "user"
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                    : "bg-gray-800 text-gray-200"
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="max-w-[80%] rounded-2xl px-4 py-2 bg-gray-800 text-gray-200">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-75" />
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-150" />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="p-4 bg-gray-800/80 border-t border-gray-700">
        <div className="flex space-x-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Escribí tu mensaje aquí..."
            className="bg-gray-700/50 border-gray-600 text-white focus-visible:ring-blue-500 focus-visible:border-blue-500"
          />
          <Button
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || isLoading}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
          >
            <Send className="h-4 w-4 mr-2" />
            Enviar
          </Button>
        </div>
      </div>
    </div>
  )
}
