"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import {
  Info,
  ArrowRight,
  Users,
  Shield,
  Coins,
  Layers,
  CheckCircle2,
  Upload,
  FileCheck,
  Wallet,
  Award,
} from "lucide-react"
import Link from "next/link"
import ChatInterface from "./components/chat-interface"
import { motion } from "framer-motion"

export default function LandingPage() {
  const [investModalOpen, setInvestModalOpen] = useState(false)
  const [projectModalOpen, setProjectModalOpen] = useState(false)
  const [infoType, setInfoType] = useState<string | null>(null)

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a20] via-[#1a1a40] to-[#0d1a40] text-white">
      {/* Header */}
      <header className="container mx-auto py-6 px-4">
        <div className="flex justify-between items-center">
         <div className="flex items-center space-x-3">
  <img
    src="https://i.imgur.com/FBk8l0d.png"
    alt="Funder Logo"
    className="h-14 md:h-16 w-auto"

  />
</div>

          <nav className="hidden md:flex space-x-6">
            <Link href="#" className="text-gray-300 hover:text-white transition-colors">
              Inicio
            </Link>
            <Link href="#como-funciona" className="text-gray-300 hover:text-white transition-colors">
              Cómo funciona
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white transition-colors">
              Proyectos
            </Link>
            <Link href="#quienes-somos" className="text-gray-300 hover:text-white transition-colors">
              Quiénes somos
            </Link>
            <Link href="#chat" className="text-gray-300 hover:text-white transition-colors">
              Chat
            </Link>
          </nav>
          <Button
            variant="outline"
            className="hidden md:inline-flex border-blue-500 text-blue-400 hover:bg-blue-900/20"
          >
            Iniciar sesión
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto py-16 px-4 md:py-24 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
        </div>

        <motion.div
          className="max-w-4xl mx-auto text-center space-y-8 relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Financiá o hacé crecer proyectos con impacto real
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Conectamos personas que quieren invertir con ideas que merecen una oportunidad
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0"
              onClick={() => setInvestModalOpen(true)}
            >
              Quiero invertir
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-500 text-blue-400 hover:bg-blue-900/20"
              onClick={() => setProjectModalOpen(true)}
            >
              Tengo un proyecto
            </Button>
          </div>
        </motion.div>
      </section>

      {/* What is Funder Section */}
      <section className="container mx-auto py-16 px-4 md:py-24 relative">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>

        <motion.div
          className="max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Apoyando a quienes se animan a crear
          </h2>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16">
            Funder es una plataforma de inversión colaborativa con tecnología blockchain. Democratizamos el acceso a
            capital y potenciamos ideas con impacto real.
          </p>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeIn}>
              <Card className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 border-0 shadow-xl backdrop-blur-sm hover:shadow-blue-500/10 transition-all">
                <CardContent className="pt-6 flex flex-col items-center text-center space-y-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full">
                    <Coins className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Crowdfunding tokenizado</h3>
                  <p className="text-gray-300">
                    Invertí en proyectos y recibí tokens que representan tu participación con beneficios exclusivos.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 border-0 shadow-xl backdrop-blur-sm hover:shadow-purple-500/10 transition-all">
                <CardContent className="pt-6 flex flex-col items-center text-center space-y-4">
                  <div className="p-3 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full">
                    <Layers className="h-8 w-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Trazabilidad con blockchain</h3>
                  <p className="text-gray-300">
                    Seguí el destino de tu inversión con total transparencia gracias a la tecnología blockchain.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 border-0 shadow-xl backdrop-blur-sm hover:shadow-cyan-500/10 transition-all">
                <CardContent className="pt-6 flex flex-col items-center text-center space-y-4">
                  <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full">
                    <Wallet className="h-8 w-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Inversión desde $1000 o menos</h3>
                  <p className="text-gray-300">
                    Comenzá a invertir con montos accesibles y diversificá tu cartera en proyectos con potencial.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Who We Are Section */}
      <section id="quienes-somos" className="container mx-auto py-16 px-4 md:py-24 relative">
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-8">
            Detrás de Funder, hay un equipo que también está empezando
          </h2>

          <Card className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 border-0 shadow-xl backdrop-blur-sm">
            <CardContent className="p-8">
              <p className="text-lg text-gray-300 text-center leading-relaxed">
                Somos cinco estudiantes de la Universidad Austral, de las carreras de Negocios Digitales y Economía
                Empresarial. Creemos en una nueva forma de financiar ideas, más humana, más transparente y adaptada al
                contexto argentino. Creamos Funder para que emprender o invertir deje de ser un privilegio, y sea una
                opción accesible para todos.
              </p>

              <div className="mt-8 flex justify-center">
                <div className="flex -space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 flex items-center justify-center text-white">
                    <Users className="h-6 w-6" />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/30 to-blue-500/30 flex items-center justify-center text-white">
                    <Users className="h-6 w-6" />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/30 to-blue-500/30 flex items-center justify-center text-white">
                    <Users className="h-6 w-6" />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/30 to-cyan-500/30 flex items-center justify-center text-white">
                    <Users className="h-6 w-6" />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/30 to-cyan-500/30 flex items-center justify-center text-white">
                    <Users className="h-6 w-6" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* How It Works Section */}
      <section id="como-funciona" className="container mx-auto py-16 px-4 md:py-24 relative">
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -z-10"></div>

        <motion.div
          className="max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-16">
            ¿Cómo funciona Funder?
          </h2>

          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 hidden md:block"></div>

            <motion.div
              className="space-y-24"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeIn} className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 md:text-right">
                  <h3 className="text-2xl font-semibold text-white mb-4">El emprendedor crea su campaña</h3>
                  <p className="text-gray-300">
                    Los creadores de proyectos completan un formulario detallando su idea, monto a recaudar y beneficios
                    para inversores.
                  </p>
                </div>
                <div className="md:w-1/2 flex justify-start md:justify-center">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white z-10 relative">
                      <Upload className="h-8 w-8" />
                    </div>
                    <div className="absolute -inset-2 bg-blue-500/20 rounded-full blur-md -z-10"></div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="flex flex-col md:flex-row-reverse items-center">
                <div className="md:w-1/2 md:pl-12 mb-8 md:mb-0 md:text-left">
                  <h3 className="text-2xl font-semibold text-white mb-4">Validamos y publicamos</h3>
                  <p className="text-gray-300">
                    Nuestro equipo revisa cada proyecto para asegurar su viabilidad y transparencia antes de publicarlo
                    en la plataforma.
                  </p>
                </div>
                <div className="md:w-1/2 flex justify-end md:justify-center">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-white z-10 relative">
                      <FileCheck className="h-8 w-8" />
                    </div>
                    <div className="absolute -inset-2 bg-purple-500/20 rounded-full blur-md -z-10"></div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 md:text-right">
                  <h3 className="text-2xl font-semibold text-white mb-4">Inversores aportan desde montos bajos</h3>
                  <p className="text-gray-300">
                    Los inversores pueden participar con pequeñas cantidades, democratizando el acceso a oportunidades
                    de inversión.
                  </p>
                </div>
                <div className="md:w-1/2 flex justify-start md:justify-center">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white z-10 relative">
                      <Coins className="h-8 w-8" />
                    </div>
                    <div className="absolute -inset-2 bg-cyan-500/20 rounded-full blur-md -z-10"></div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="flex flex-col md:flex-row-reverse items-center">
                <div className="md:w-1/2 md:pl-12 mb-8 md:mb-0 md:text-left">
                  <h3 className="text-2xl font-semibold text-white mb-4">Si se alcanza la meta, se libera el dinero</h3>
                  <p className="text-gray-300">
                    Una vez alcanzado el objetivo de financiación, los fondos se transfieren al emprendedor para
                    comenzar el proyecto.
                  </p>
                </div>
                <div className="md:w-1/2 flex justify-end md:justify-center">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white z-10 relative">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <div className="absolute -inset-2 bg-blue-500/20 rounded-full blur-md -z-10"></div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 md:text-right">
                  <h3 className="text-2xl font-semibold text-white mb-4">El inversor recibe un token como respaldo</h3>
                  <p className="text-gray-300">
                    Cada inversor recibe tokens digitales que representan su participación y le dan acceso a beneficios
                    exclusivos.
                  </p>
                </div>
                <div className="md:w-1/2 flex justify-start md:justify-center">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-white z-10 relative">
                      <Award className="h-8 w-8" />
                    </div>
                    <div className="absolute -inset-2 bg-purple-500/20 rounded-full blur-md -z-10"></div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Education Section */}
      <section className="container mx-auto py-16 px-4 md:py-24 relative">
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-8">
            ¿Crowdlending o Crowdfunding?
          </h2>

          <Card className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 border-0 shadow-xl backdrop-blur-sm">
            <CardContent className="p-8">
              <p className="text-lg text-gray-300 text-center mb-10">¿Qué modelo te parece más atractivo?</p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <Card className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-blue-500/20 hover:border-blue-500/50 transition-all cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-semibold text-white">Crowdlending</h3>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-blue-400 hover:text-blue-300 hover:bg-blue-900/20"
                          onClick={() => setInfoType("crowdlending")}
                        >
                          <Info className="h-5 w-5" />
                        </Button>
                      </div>
                      <p className="text-gray-300">
                        Préstamos colectivos donde los inversores reciben su capital más intereses.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="relative">
                  <Card className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-purple-500/20 hover:border-purple-500/50 transition-all cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-semibold text-white">Crowdfunding</h3>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-purple-400 hover:text-purple-300 hover:bg-purple-900/20"
                          onClick={() => setInfoType("crowdfunding")}
                        >
                          <Info className="h-5 w-5" />
                        </Button>
                      </div>
                      <p className="text-gray-300">
                        Financiamiento colectivo donde los inversores reciben recompensas o beneficios.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="mt-10 text-center">
                <Button
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0"
                  onClick={() => document.getElementById("chat")?.scrollIntoView({ behavior: "smooth" })}
                >
                  ¿No sabés cuál elegir? Preguntale a Fundi
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Chat Section */}
      <section id="chat" className="container mx-auto py-16 px-4 md:py-24 relative">
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            Conocé más con Fundi, nuestro asistente
          </h2>
          <p className="text-xl text-gray-300 text-center mb-10">
            Fundi puede explicarte cómo funciona la plataforma, ayudarte a elegir tu perfil o responder tus dudas.
          </p>

          <Card className="border-0 shadow-xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm">
            <CardContent className="pt-6">
              <ChatInterface />
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Community Section */}
      <section className="container mx-auto py-16 px-4 md:py-24 relative">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl -z-10"></div>

        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
            ¿Querés sumarte a la comunidad Funder?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Te avisaremos cuando lancemos la beta. ¡Gracias por ayudarnos a construir esta idea!
          </p>

          <Card className="border-0 shadow-xl bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-sm">
            <CardContent className="pt-6">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="community-name" className="text-gray-300">
                      Nombre
                    </Label>
                    <Input
                      id="community-name"
                      placeholder="Tu nombre"
                      className="bg-gray-800/50 border-gray-700 text-white focus-visible:ring-blue-500 focus-visible:border-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="community-email" className="text-gray-300">
                      Email
                    </Label>
                    <Input
                      id="community-email"
                      type="email"
                      placeholder="tu@email.com"
                      className="bg-gray-800/50 border-gray-700 text-white focus-visible:ring-blue-500 focus-visible:border-blue-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="role" className="text-gray-300">
                    Rol
                  </Label>
                  <Select>
                    <SelectTrigger className="bg-gray-800/50 border-gray-700 text-white focus:ring-blue-500">
                      <SelectValue placeholder="Seleccioná tu rol" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-700 text-white">
                      <SelectItem value="investor">Inversor</SelectItem>
                      <SelectItem value="entrepreneur">Emprendedor</SelectItem>
                      <SelectItem value="both">Ambos</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0">
                  Unirme a la comunidad
                </Button>

                <p className="text-xs text-gray-400">
                  Al registrarte, aceptás recibir comunicaciones de Funder. Podés darte de baja en cualquier momento.
                </p>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900/80 backdrop-blur-sm text-white py-12 mt-16 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Funder
              </h3>
              <p className="text-gray-400">Plataforma de inversión colaborativa para proyectos con impacto real.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-300">Enlaces</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="#como-funciona" className="text-gray-400 hover:text-white transition-colors">
                    Cómo funciona
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Proyectos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-300">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Términos y condiciones
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Política de privacidad
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-300">Contacto</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">info@funder.com</li>
                <li className="text-gray-400">Buenos Aires, Argentina</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Funder. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <Dialog open={investModalOpen} onOpenChange={setInvestModalOpen}>
        <DialogContent className="bg-gray-900 border-gray-800 text-white">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Invertir en Funder
            </DialogTitle>
            <DialogDescription className="text-gray-300">
              En Funder podés invertir en proyectos desde montos bajos, recibir tokens con beneficios y participar de
              iniciativas reales.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="flex items-start space-x-3">
              <div className="p-2 bg-blue-500/20 rounded-full">
                <Shield className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <h4 className="font-medium text-white">Inversiones seguras</h4>
                <p className="text-sm text-gray-400">Todos los proyectos son validados por nuestro equipo.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="p-2 bg-purple-500/20 rounded-full">
                <Coins className="h-5 w-5 text-purple-400" />
              </div>
              <div>
                <h4 className="font-medium text-white">Montos accesibles</h4>
                <p className="text-sm text-gray-400">Comenzá a invertir desde $1000 o menos.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="p-2 bg-cyan-500/20 rounded-full">
                <Award className="h-5 w-5 text-cyan-400" />
              </div>
              <div>
                <h4 className="font-medium text-white">Tokens con beneficios</h4>
                <p className="text-sm text-gray-400">Recibí tokens que te dan acceso a beneficios exclusivos.</p>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <Button
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0"
              onClick={() => setInvestModalOpen(false)}
            >
              Entendido
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={projectModalOpen} onOpenChange={setProjectModalOpen}>
        <DialogContent className="bg-gray-900 border-gray-800 text-white">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Financiar tu proyecto
            </DialogTitle>
            <DialogDescription className="text-gray-300">
              Funder te ayuda a financiar tu idea con transparencia, sin bancos y con apoyo real. Pronto podrás
              registrarte.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="flex items-start space-x-3">
              <div className="p-2 bg-blue-500/20 rounded-full">
                <Users className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <h4 className="font-medium text-white">Comunidad de inversores</h4>
                <p className="text-sm text-gray-400">
                  Accedé a una red de personas interesadas en apoyar nuevos proyectos.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="p-2 bg-purple-500/20 rounded-full">
                <Shield className="h-5 w-5 text-purple-400" />
              </div>
              <div>
                <h4 className="font-medium text-white">Sin burocracia bancaria</h4>
                <p className="text-sm text-gray-400">Olvidate de los requisitos imposibles y las largas esperas.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="p-2 bg-cyan-500/20 rounded-full">
                <Layers className="h-5 w-5 text-cyan-400" />
              </div>
              <div>
                <h4 className="font-medium text-white">Transparencia total</h4>
                <p className="text-sm text-gray-400">Blockchain para asegurar la trazabilidad de los fondos.</p>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <Button
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0"
              onClick={() => setProjectModalOpen(false)}
            >
              Entendido
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={!!infoType} onOpenChange={() => setInfoType(null)}>
        <DialogContent className="bg-gray-900 border-gray-800 text-white">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {infoType === "crowdlending" ? "Crowdlending" : "Crowdfunding"}
            </DialogTitle>
          </DialogHeader>

          {infoType === "crowdlending" ? (
            <div className="space-y-4">
              <p className="text-gray-300">
                El crowdlending es un modelo de financiamiento colectivo donde múltiples inversores prestan pequeñas
                cantidades de dinero a un proyecto o empresa.
              </p>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="font-medium text-white mb-2">Características principales:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Los inversores reciben su capital más intereses</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Ideal para proyectos con modelo de negocio establecido</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Menor riesgo para el inversor</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Plazos y condiciones de devolución definidos</span>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-gray-300">
                El crowdfunding es un modelo de financiamiento colectivo donde múltiples personas aportan pequeñas
                cantidades de dinero a cambio de recompensas o beneficios.
              </p>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="font-medium text-white mb-2">Características principales:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Los inversores reciben recompensas o beneficios exclusivos</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Ideal para proyectos creativos o en etapa inicial</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Mayor flexibilidad para el emprendedor</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span>No requiere devolución del capital invertido</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          <div className="flex justify-end">
            <Button
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0"
              onClick={() => setInfoType(null)}
            >
              Entendido
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
