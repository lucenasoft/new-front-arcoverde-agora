"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function BannerCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const banners = [
    {
      id: 1,
      title: "Loja do João - Materiais de Construção",
      subtitle: "Os melhores preços de Arcoverde! Entrega grátis na cidade.",
      cta: "Ver Ofertas",
      bgColor: "from-green-500 to-blue-600",
      textColor: "text-white",
    },
    {
      id: 2,
      title: "Supermercado Central",
      subtitle: "Ofertas imperdíveis toda semana! Venha conferir.",
      cta: "Ver Promoções",
      bgColor: "from-red-500 to-pink-600",
      textColor: "text-white",
    },
    {
      id: 3,
      title: "Clínica Saúde Total",
      subtitle: "Consultas e exames com os melhores profissionais da região.",
      cta: "Agendar Consulta",
      bgColor: "from-purple-500 to-indigo-600",
      textColor: "text-white",
    },
    {
      id: 4,
      title: "Auto Escola Progresso",
      subtitle: "Sua CNH com segurança e qualidade! Aulas teóricas e práticas.",
      cta: "Matricule-se",
      bgColor: "from-orange-500 to-yellow-600",
      textColor: "text-white",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [banners.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length)
  }

  return (
    <div className="relative bg-gray-100 py-4">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-lg">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {banners.map((banner) => (
              <div key={banner.id} className="w-full flex-shrink-0">
                <Card className={`bg-gradient-to-r ${banner.bgColor} ${banner.textColor} p-8 border-0`}>
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold mb-3">{banner.title}</h3>
                      <p className="text-lg mb-4 opacity-90">{banner.subtitle}</p>
                      <Button variant="secondary" size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                        {banner.cta}
                      </Button>
                    </div>
                    <div className="hidden md:block ml-8">
                      <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
                        <div className="text-4xl font-bold opacity-50">{banner.title.split(" ")[0]}</div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="sm"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 rounded-full p-2"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 rounded-full p-2"
            onClick={nextSlide}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {banners.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? "bg-white" : "bg-white/50"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
