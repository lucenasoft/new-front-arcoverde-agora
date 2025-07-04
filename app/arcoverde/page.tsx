import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Eye, MessageCircle, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ArcoverdePage() {
  const arcoverdeNews = [
    {
      id: 1,
      title: "Prefeitura anuncia investimento de R$ 5 milhões em infraestrutura",
      excerpt: "Recursos serão destinados para pavimentação, saneamento e iluminação pública em diversos bairros.",
      time: "2 horas atrás",
      views: 1247,
      comments: 23,
      image: "/placeholder.svg?height=300&width=400",
      featured: true,
    },
    {
      id: 2,
      title: "Hospital Regional recebe novos equipamentos médicos",
      excerpt: "Investimento de R$ 800 mil em equipamentos vai melhorar atendimento na emergência.",
      time: "4 horas atrás",
      views: 892,
      comments: 15,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "Festival de São João movimenta economia local",
      excerpt: "Evento cultural atrai milhares de visitantes e gera receita para comerciantes.",
      time: "6 horas atrás",
      views: 654,
      comments: 8,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      title: "Nova escola será construída no bairro Cohab",
      excerpt: "Unidade de ensino vai atender 500 alunos do ensino fundamental.",
      time: "8 horas atrás",
      views: 543,
      comments: 12,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 5,
      title: "Feira livre ganha nova estrutura no centro da cidade",
      excerpt: "Reforma moderniza espaço e melhora condições para feirantes e clientes.",
      time: "10 horas atrás",
      views: 432,
      comments: 6,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 6,
      title: "Secretaria de Meio Ambiente lança campanha de arborização",
      excerpt: "Meta é plantar 1000 mudas de árvores nativas em praças e avenidas.",
      time: "12 horas atrás",
      views: 321,
      comments: 4,
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4">
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
              <Link href="/" className="hover:text-blue-200">
                Início
              </Link>
              <Link href="/policia" className="hover:text-blue-200">
                Polícia
              </Link>
              <Link href="/esportes" className="hover:text-blue-200">
                Esportes
              </Link>
              <Link href="/pernambuco" className="hover:text-blue-200">
                Pernambuco
              </Link>
              <Link href="/brasil-mundo" className="hover:text-blue-200">
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
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Notícias de Arcoverde</h1>
              <p className="text-gray-600">Acompanhe as principais notícias da nossa cidade</p>
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
            {arcoverdeNews
              .filter((news) => news.featured)
              .map((news) => (
                <article key={news.id} className="mb-8">
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className="relative h-64 md:h-96">
                      <Image src={news.image || "/placeholder.svg"} alt={news.title} fill className="object-cover" />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-blue-600 text-white font-semibold">Arcoverde</Badge>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                        <Link href={`/noticia/${news.id}`}>
                          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white leading-tight hover:text-blue-200 transition-colors cursor-pointer">
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
              {arcoverdeNews
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
                        <Badge className="bg-blue-600 text-white text-xs">Arcoverde</Badge>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <Link href={`/noticia/${news.id}`}>
                        <h3 className="font-bold mb-2 text-gray-900 leading-tight line-clamp-2 hover:text-blue-600 transition-colors cursor-pointer">
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
            <Card className="mb-6 bg-gradient-to-b from-green-500 to-teal-600 text-white">
              <CardContent className="p-4 text-center">
                <h3 className="font-bold mb-2">Farmácia São José</h3>
                <p className="text-sm mb-3">Medicamentos com os melhores preços!</p>
                <Button variant="secondary" size="sm">
                  Localização
                </Button>
              </CardContent>
            </Card>

            {/* Outras Seções */}
            <Card className="mb-6">
              <div className="bg-blue-600 text-white p-4">
                <h3 className="font-bold">Outras Seções</h3>
              </div>
              <CardContent className="p-0">
                <Link href="/policia" className="block p-4 border-b hover:bg-gray-50 transition-colors">
                  <h4 className="font-medium text-gray-900">Polícia</h4>
                  <p className="text-sm text-gray-600">Segurança pública e ocorrências</p>
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

            {/* Banner Lateral 2 */}
            <Card className="bg-gradient-to-b from-orange-500 to-red-600 text-white">
              <CardContent className="p-4 text-center">
                <h3 className="font-bold mb-2">Supermercado Central</h3>
                <p className="text-sm mb-3">Ofertas imperdíveis toda semana!</p>
                <Button variant="secondary" size="sm">
                  Ver Promoções
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
