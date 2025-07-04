import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Clock, Search, Menu, Facebook, Instagram, Youtube, MapPin, Eye, MessageCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import PublicidadeGrid from "@/components/publicidade-grid"
import BannerCarousel from "@/components/banner-carousel" // Import BannerCarousel component

export default function HomePage() {
  const featuredNews = {
    id: 1,
    title: "Prefeitura de Arcoverde anuncia investimento de R$ 5 milhões em infraestrutura",
    excerpt:
      "Recursos serão destinados para pavimentação, saneamento e iluminação pública em diversos bairros da cidade. Obras devem começar no próximo mês.",
    category: "Arcoverde",
    time: "2 horas atrás",
    views: 1247,
    comments: 23,
    image: "/placeholder.svg?height=400&width=600",
    author: "João Silva",
  }

  const newsBySection = {
    arcoverde: [
      {
        id: 2,
        title: "Hospital Regional de Arcoverde recebe novos equipamentos",
        excerpt: "Investimento de R$ 800 mil em equipamentos médicos vai melhorar atendimento na emergência.",
        time: "4 horas atrás",
        views: 892,
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: 3,
        title: "Festival de São João movimenta economia local",
        excerpt: "Evento cultural atrai milhares de visitantes e gera receita para comerciantes.",
        time: "6 horas atrás",
        views: 654,
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: 12,
        title: "Arcoverde sedia encontro de gestores municipais",
        excerpt: "Evento discute desafios e soluções para a administração pública.",
        time: "8 horas atrás",
        views: 321,
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
    policia: [
      {
        id: 4,
        title: "Operação da Polícia Civil prende quadrilha de assaltantes",
        excerpt: "Grupo era responsável por série de assaltos na região central da cidade.",
        time: "3 horas atrás",
        views: 743,
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: 5,
        title: "PM intensifica patrulhamento no centro da cidade",
        excerpt: "Medida visa aumentar segurança durante período de maior movimento comercial.",
        time: "5 horas atrás",
        views: 521,
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: 13,
        title: "Polícia Militar apreende drogas e armas em Arcoverde",
        excerpt: "Ação resultou na prisão de suspeitos e na apreensão de materiais ilícitos.",
        time: "9 horas atrás",
        views: 456,
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
    esportes: [
      {
        id: 6,
        title: "Time de Arcoverde se classifica para final do campeonato regional",
        excerpt: "Vitória por 3x1 sobre o rival garante vaga na decisão que acontece no próximo domingo.",
        time: "1 hora atrás",
        views: 1156,
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: 7,
        title: "Ginásio municipal recebe melhorias para nova temporada",
        excerpt: "Reforma inclui nova iluminação e pintura da quadra principal.",
        time: "7 horas atrás",
        views: 432,
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: 14,
        title: "Atletas de Arcoverde se destacam em competição estadual",
        excerpt: "Delegação conquistou medalhas em diversas modalidades esportivas.",
        time: "10 horas atrás",
        views: 287,
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
    pernambuco: [
      {
        id: 8,
        title: "Governo de PE anuncia novo programa habitacional",
        excerpt: "Iniciativa vai beneficiar famílias de baixa renda em todo o estado.",
        time: "2 horas atrás",
        views: 987,
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: 9,
        title: "Rodovia PE-232 recebe obras de duplicação",
        excerpt: "Investimento de R$ 50 milhões vai melhorar tráfego na região.",
        time: "4 horas atrás",
        views: 765,
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: 15,
        title: "Feira de artesanato movimenta o centro de Caruaru",
        excerpt: "Evento reúne artistas e artesãos de todo o estado.",
        time: "6 horas atrás",
        views: 543,
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
    brasil: [
      {
        id: 10,
        title: "Congresso Nacional aprova novo marco regulatório",
        excerpt: "Medida deve impactar diversos setores da economia brasileira.",
        time: "1 hora atrás",
        views: 2134,
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: 11,
        title: "IBGE divulga dados sobre crescimento populacional",
        excerpt: "Pesquisa mostra tendências demográficas do país nos últimos anos.",
        time: "3 horas atrás",
        views: 1543,
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: 16,
        title: "Taxa de desemprego tem leve queda no último trimestre",
        excerpt: "Dados indicam recuperação gradual do mercado de trabalho.",
        time: "5 horas atrás",
        views: 876,
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
  }

  const sideNews = [
    { title: "Secretaria de Educação divulga calendário escolar 2025", time: "1h", category: "Educação" },
    { title: "Nova feira livre será inaugurada no bairro São José", time: "3h", category: "Economia" },
    { title: "Câmara Municipal aprova projeto sobre meio ambiente", time: "5h", category: "Política" },
    { title: "Posto de saúde do centro passa por reforma", time: "7h", category: "Saúde" },
    { title: "Trânsito será alterado para obras na Avenida Principal", time: "9h", category: "Trânsito" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar */}
      <div className="bg-blue-600 text-white py-2">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Badge className="bg-red-600 hover:bg-red-700 animate-pulse">ÚLTIMAS NOTÍCIAS</Badge>
            <span className="text-sm hidden md:block">
              {new Date().toLocaleDateString("pt-BR", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Facebook className="w-4 h-4 hover:text-blue-200 cursor-pointer transition-colors" />
            <Instagram className="w-4 h-4 hover:text-blue-200 cursor-pointer transition-colors" />
            <Youtube className="w-4 h-4 hover:text-blue-200 cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
      {/* Hero Section */}
      <div className="relative">
        <div className="h-80 md:h-96 relative overflow-hidden">
          <Image src="/hero-arcoverde.webp" alt="Vista de Arcoverde" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          {/* Logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-8 py-6 shadow-2xl">
              <h1 className="text-3xl md:text-5xl font-bold text-blue-600">
                Arcoverde <span className="text-blue-800">Agora</span>
              </h1>
              <p className="text-center text-gray-600 mt-2 text-sm">Notícias de Arcoverde e Região</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="bg-blue-600 shadow-lg sticky top-0 z-40">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <div className="hidden md:flex items-center space-x-6 py-4">
                <Link
                  href="/"
                  className="text-white hover:text-blue-200 font-medium transition-colors px-3 py-2 rounded"
                >
                  Início
                </Link>
                <Link
                  href="/arcoverde"
                  className="text-white hover:text-blue-200 font-medium transition-colors px-3 py-2 rounded"
                >
                  Arcoverde
                </Link>
                <Link
                  href="/policia"
                  className="text-white hover:text-blue-200 font-medium transition-colors px-3 py-2 rounded"
                >
                  Polícia
                </Link>
                <Link
                  href="/esportes"
                  className="text-white hover:text-blue-200 font-medium transition-colors px-3 py-2 rounded"
                >
                  Esportes
                </Link>
                <Link
                  href="/pernambuco"
                  className="text-white hover:text-blue-200 font-medium transition-colors px-3 py-2 rounded"
                >
                  Pernambuco
                </Link>
                <Link
                  href="/brasil-mundo"
                  className="text-white hover:text-blue-200 font-medium transition-colors px-3 py-2 rounded"
                >
                  Brasil e Mundo
                </Link>
              </div>

              <div className="flex items-center gap-3 py-4">
                <div className="relative hidden md:block">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input placeholder="Buscar notícias..." className="pl-10 bg-white/90 border-0 w-64" />
                </div>
                <Button variant="ghost" size="sm" className="md:hidden text-white">
                  <Menu className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Banner Carousel */}
      <BannerCarousel />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured News */}
            <article className="mb-8">
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 md:h-96">
                  <Image
                    src={featuredNews.image || "/placeholder.svg"}
                    alt={featuredNews.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-red-600 text-white font-semibold">{featuredNews.category}</Badge>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <Link href={`/noticia/${featuredNews.id}`}>
                      <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white leading-tight hover:text-blue-200 transition-colors cursor-pointer">
                        {featuredNews.title}
                      </h2>
                    </Link>
                    <p className="text-gray-200 mb-4 leading-relaxed">{featuredNews.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-300">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {featuredNews.time}
                        </span>
                        <span className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {featuredNews.views}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageCircle className="w-4 h-4" />
                          {featuredNews.comments}
                        </span>
                      </div>
                      <span>Por {featuredNews.author}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </article>

            {/* Publicidade Grid */}
            <PublicidadeGrid />

            {/* News Sections */}
            {Object.entries(newsBySection).map(([section, news]) => (
              <section key={section} className="mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 capitalize flex items-center">
                    {section === "brasil" ? "Brasil e Mundo" : section}
                    <div className="ml-3 h-1 w-12 bg-blue-600 rounded"></div>
                  </h2>
                  <Link href={`/${section === "brasil" ? "brasil-mundo" : section}`}>
                    <Button variant="outline" size="sm">
                      Ver todas
                    </Button>
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Featured News - Larger */}
                  <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                    <div className="relative h-64 md:h-72">
                      <Image
                        src={news[0].image || "/placeholder.svg"}
                        alt={news[0].title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-blue-600 text-white text-sm capitalize">{section}</Badge>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <Link href={`/noticia/${news[0].id}`}>
                          <h3 className="font-bold mb-2 text-white leading-tight hover:text-blue-200 transition-colors cursor-pointer text-lg">
                            {news[0].title}
                          </h3>
                        </Link>
                        <p className="text-gray-200 text-sm mb-3 line-clamp-2">{news[0].excerpt}</p>
                        <div className="flex items-center gap-3 text-xs text-gray-300">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {news[0].time}
                          </span>
                          <span className="flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            {news[0].views}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Other News - Stack */}
                  <div className="space-y-4">
                    {news.slice(1).map((item) => (
                      <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                        <div className="flex gap-4 p-4">
                          <div className="relative w-32 h-24 flex-shrink-0">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.title}
                              fill
                              className="object-cover rounded group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <Link href={`/noticia/${item.id}`}>
                              <h4 className="font-bold mb-2 text-gray-900 leading-tight line-clamp-2 hover:text-blue-600 transition-colors cursor-pointer">
                                {item.title}
                              </h4>
                            </Link>
                            <p className="text-gray-600 text-sm mb-2 line-clamp-1">{item.excerpt}</p>
                            <div className="flex items-center gap-3 text-xs text-gray-500">
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {item.time}
                              </span>
                              <span className="flex items-center gap-1">
                                <Eye className="w-3 h-3" />
                                {item.views}
                              </span>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </section>
            ))}

            {/* Load More */}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Quick News */}
            <Card className="mb-6">
              <div className="bg-blue-600 text-white p-4">
                <h3 className="font-bold">Notícias Rápidas</h3>
              </div>
              <CardContent className="p-0">
                {sideNews.map((news, index) => (
                  <div
                    key={index}
                    className="p-4 border-b last:border-b-0 hover:bg-gray-50 cursor-pointer transition-colors"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="outline" className="text-xs">
                        {news.category}
                      </Badge>
                      <span className="text-xs text-gray-500">{news.time}</span>
                    </div>
                    <p className="text-sm font-medium text-gray-900 leading-tight hover:text-blue-600 transition-colors">
                      {news.title}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Weather */}
            <Card className="mb-6">
              <div className="bg-blue-600 text-white p-4">
                <h3 className="font-bold flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Clima - Arcoverde
                </h3>
              </div>
              <CardContent className="p-4 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">29°C</div>
                <div className="text-gray-600 mb-3">Sol com poucas nuvens</div>
                <div className="flex justify-between text-sm text-gray-500 mb-3">
                  <span>Min: 21°C</span>
                  <span>Max: 33°C</span>
                </div>
                <div className="text-xs text-gray-400">Atualizado há 1 hora</div>
              </CardContent>
            </Card>

            {/* Newsletter */}
            <Card>
              <div className="bg-blue-600 text-white p-4">
                <h3 className="font-bold">Newsletter</h3>
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-gray-600 mb-4">
                  Receba as principais notícias de Arcoverde direto no seu email
                </p>
                <div className="space-y-3">
                  <Input placeholder="Seu e-mail" type="email" />
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Inscrever-se</Button>
                </div>
                <p className="text-xs text-gray-500 mt-2">Mais de 5.000 pessoas já recebem nossa newsletter</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-2xl font-bold mb-4">Arcoverde Agora</h4>
              <p className="text-gray-300 text-sm mb-4">
                O portal de notícias mais completo de Arcoverde e região. Informação de qualidade e credibilidade há
                mais de 10 anos.
              </p>
              <div className="flex gap-3">
                <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Youtube className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Seções</h5>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link href="/arcoverde" className="hover:text-white transition-colors">
                    Arcoverde
                  </Link>
                </li>
                <li>
                  <Link href="/policia" className="hover:text-white transition-colors">
                    Polícia
                  </Link>
                </li>
                <li>
                  <Link href="/esportes" className="hover:text-white transition-colors">
                    Esportes
                  </Link>
                </li>
                <li>
                  <Link href="/pernambuco" className="hover:text-white transition-colors">
                    Pernambuco
                  </Link>
                </li>
                <li>
                  <Link href="/brasil-mundo" className="hover:text-white transition-colors">
                    Brasil e Mundo
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Contato</h5>
              <div className="text-sm text-gray-300 space-y-2">
                <p>📧 contato@arcoverdeagora.com.br</p>
                <p>📱 (87) 99999-9999</p>
                <p>📍 Rua Principal, 123 - Centro</p>
                <p>Arcoverde - PE, 56503-000</p>
              </div>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Anuncie Conosco</h5>
              <p className="text-sm text-gray-300 mb-4">Divulgue sua empresa no portal mais acessado da região</p>
              <Button
                variant="outline"
                size="sm"
                className="text-white border-white hover:bg-white hover:text-gray-900 bg-transparent"
              >
                Falar com Comercial
              </Button>
            </div>
          </div>

          <Separator className="my-8 bg-gray-700" />

          <div className="text-center text-sm text-gray-400">
            <p>&copy; 2025 Arcoverde Agora. Todos os direitos reservados. | CNPJ: 00.000.000/0001-00</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
