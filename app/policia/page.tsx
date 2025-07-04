import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Eye, MessageCircle, ArrowLeft, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PoliciaPage() {
  const policiaNews = [
    {
      id: 1,
      title: "Operação da Polícia Civil prende quadrilha de assaltantes em Arcoverde",
      excerpt:
        "Grupo era responsável por série de assaltos na região central da cidade. Foram apreendidas armas e objetos roubados.",
      time: "1 hora atrás",
      views: 1543,
      comments: 34,
      image: "/placeholder.svg?height=300&width=400",
      featured: true,
    },
    {
      id: 2,
      title: "PM intensifica patrulhamento no centro da cidade",
      excerpt: "Medida visa aumentar segurança durante período de maior movimento comercial.",
      time: "3 horas atrás",
      views: 892,
      comments: 15,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "Homem é preso por violência doméstica no bairro São José",
      excerpt: "Suspeito foi detido após denúncia da vítima através do 190.",
      time: "5 horas atrás",
      views: 654,
      comments: 8,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      title: "Polícia Rodoviária apreende drogas na BR-232",
      excerpt: "Foram encontrados 5kg de maconha em veículo durante fiscalização de rotina.",
      time: "7 horas atrás",
      views: 743,
      comments: 12,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 5,
      title: "Delegacia de Arcoverde esclarece caso de furto em loja",
      excerpt: "Suspeito foi identificado através de câmeras de segurança e já foi localizado.",
      time: "9 horas atrás",
      views: 432,
      comments: 6,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 6,
      title: "Operação Lei Seca flagra 15 condutores embriagados",
      excerpt: "Ação foi realizada durante o final de semana em pontos estratégicos da cidade.",
      time: "11 horas atrás",
      views: 521,
      comments: 9,
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-red-600 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="ghost" size="sm" className="text-white">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Voltar
                </Button>
              </Link>
              <h1 className="text-2xl font-bold">Arcoverde Agora</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="hover:text-red-200">
                Início
              </Link>
              <Link href="/arcoverde" className="hover:text-red-200">
                Arcoverde
              </Link>
              <Link href="/esportes" className="hover:text-red-200">
                Esportes
              </Link>
              <Link href="/pernambuco" className="hover:text-red-200">
                Pernambuco
              </Link>
              <Link href="/brasil-mundo" className="hover:text-red-200">
                Brasil e Mundo
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Page Header */}
      <div className="bg-white py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Polícia</h1>
              <p className="text-gray-600">Segurança pública e ocorrências policiais em Arcoverde e região</p>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Numbers */}
      <div className="bg-red-50 py-4 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-red-600">Emergência:</span>
              <span className="font-bold">190</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-red-600">Bombeiros:</span>
              <span className="font-bold">193</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-red-600">SAMU:</span>
              <span className="font-bold">192</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-red-600">Delegacia:</span>
              <span className="font-bold">(87) 3821-1234</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main News */}
          <div className="lg:col-span-3">
            {/* Featured News */}
            {policiaNews
              .filter((news) => news.featured)
              .map((news) => (
                <article key={news.id} className="mb-8">
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className="relative h-64 md:h-96">
                      <Image src={news.image || "/placeholder.svg"} alt={news.title} fill className="object-cover" />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-red-600 text-white font-semibold">Polícia</Badge>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                        <Link href={`/noticia/${news.id}`}>
                          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white leading-tight hover:text-red-200 transition-colors cursor-pointer">
                            {news.title}
                          </h2>
                        </Link>
                        <p className="text-gray-200 mb-4 leading-relaxed">{news.excerpt}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-300">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {news.time}
                          </span>
                          <span className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            {news.views}
                          </span>
                          <span className="flex items-center gap-1">
                            <MessageCircle className="w-4 h-4" />
                            {news.comments}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </article>
              ))}

            {/* Other News */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {policiaNews
                .filter((news) => !news.featured)
                .map((news) => (
                  <Card key={news.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                    <div className="relative h-48">
                      <Image
                        src={news.image || "/placeholder.svg"}
                        alt={news.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-red-600 text-white text-xs">Polícia</Badge>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <Link href={`/noticia/${news.id}`}>
                        <h3 className="font-bold mb-2 text-gray-900 leading-tight line-clamp-2 hover:text-red-600 transition-colors cursor-pointer">
                          {news.title}
                        </h3>
                      </Link>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{news.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {news.time}
                          </span>
                          <span className="flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            {news.views}
                          </span>
                        </div>
                        <span className="flex items-center gap-1">
                          <MessageCircle className="w-3 h-3" />
                          {news.comments}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <Button variant="outline" size="lg">
                Carregar Mais Notícias
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Banner Lateral */}
            <Card className="mb-6 bg-gradient-to-b from-blue-500 to-indigo-600 text-white">
              <CardContent className="p-4 text-center">
                <h3 className="font-bold mb-2">Segurança Eletrônica</h3>
                <p className="text-sm mb-3">Câmeras e alarmes para sua proteção</p>
                <Button variant="secondary" size="sm">
                  Orçamento
                </Button>
              </CardContent>
            </Card>

            {/* Outras Seções */}
            <Card className="mb-6">
              <div className="bg-red-600 text-white p-4">
                <h3 className="font-bold">Outras Seções</h3>
              </div>
              <CardContent className="p-0">
                <Link href="/arcoverde" className="block p-4 border-b hover:bg-gray-50 transition-colors">
                  <h4 className="font-medium text-gray-900">Arcoverde</h4>
                  <p className="text-sm text-gray-600">Notícias da cidade</p>
                </Link>
                <Link href="/esportes" className="block p-4 border-b hover:bg-gray-50 transition-colors">
                  <h4 className="font-medium text-gray-900">Esportes</h4>
                  <p className="text-sm text-gray-600">Futebol e esportes regionais</p>
                </Link>
                <Link href="/pernambuco" className="block p-4 border-b hover:bg-gray-50 transition-colors">
                  <h4 className="font-medium text-gray-900">Pernambuco</h4>
                  <p className="text-sm text-gray-600">Notícias do estado</p>
                </Link>
                <Link href="/brasil-mundo" className="block p-4 hover:bg-gray-50 transition-colors">
                  <h4 className="font-medium text-gray-900">Brasil e Mundo</h4>
                  <p className="text-sm text-gray-600">Notícias nacionais e internacionais</p>
                </Link>
              </CardContent>
            </Card>

            {/* Dicas de Segurança */}
            <Card className="mb-6">
              <div className="bg-yellow-500 text-white p-4">
                <h3 className="font-bold">Dicas de Segurança</h3>
              </div>
              <CardContent className="p-4">
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500 font-bold">•</span>
                    <span>Sempre tranque portas e janelas ao sair de casa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500 font-bold">•</span>
                    <span>Evite ostentar objetos de valor em locais públicos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500 font-bold">•</span>
                    <span>Mantenha documentos em local seguro</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500 font-bold">•</span>
                    <span>Em caso de emergência, ligue 190</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Banner Lateral 2 */}
            <Card className="bg-gradient-to-b from-green-500 to-teal-600 text-white">
              <CardContent className="p-4 text-center">
                <h3 className="font-bold mb-2">Advocacia Criminal</h3>
                <p className="text-sm mb-3">Defesa jurídica especializada</p>
                <Button variant="secondary" size="sm">
                  Consulta
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
