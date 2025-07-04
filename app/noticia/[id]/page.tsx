import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Clock, Eye, MessageCircle, Facebook, Twitter, PhoneIcon as WhatsApp, ArrowLeft, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function NoticiaPage({ params }: { params: { id: string } }) {
  // Simulando dados da notícia baseado no ID
  const noticia = {
    id: params.id,
    title: "Prefeitura de Arcoverde anuncia investimento de R$ 5 milhões em infraestrutura",
    content: `
      <p>A Prefeitura de Arcoverde anunciou nesta terça-feira (23) um investimento de R$ 5 milhões em obras de infraestrutura que beneficiarão diversos bairros da cidade. O anúncio foi feito pelo prefeito durante coletiva de imprensa realizada no Paço Municipal.</p>
      
      <p>Segundo o gestor municipal, os recursos serão destinados para pavimentação asfáltica, obras de saneamento básico e modernização da iluminação pública. "Este é um investimento histórico para nossa cidade. Vamos melhorar a qualidade de vida dos arcoverdenses", declarou o prefeito.</p>
      
      <p>As obras contemplarão os bairros São José, Cohab, Petrópolis e Centro, com previsão de início para o próximo mês. A pavimentação asfáltica será realizada em aproximadamente 15 quilômetros de ruas, beneficiando diretamente mais de 3 mil famílias.</p>
      
      <p>O projeto de saneamento básico inclui a construção de redes de esgoto e ampliação do sistema de abastecimento de água. Já a modernização da iluminação pública prevê a instalação de lâmpadas LED em pontos estratégicos da cidade.</p>
      
      <p>"Essas obras são resultado de muito planejamento e busca por recursos. Conseguimos viabilizar este investimento através de parcerias com o governo estadual e federal", explicou o secretário de Obras Públicas.</p>
      
      <p>A população poderá acompanhar o andamento das obras através do site oficial da prefeitura, onde será disponibilizado um cronograma detalhado de cada etapa do projeto.</p>
    `,
    category: "Política",
    publishedAt: "2025-01-23T14:30:00",
    author: "João Silva",
    views: 1247,
    comments: 23,
    image: "/placeholder.svg?height=400&width=800",
    tags: ["Infraestrutura", "Prefeitura", "Obras Públicas", "Arcoverde"],
  }

  const relatedNews = [
    {
      id: 2,
      title: "Hospital Regional recebe novos equipamentos médicos",
      image: "/placeholder.svg?height=100&width=150",
      time: "4 horas atrás",
    },
    {
      id: 3,
      title: "Time local se classifica para final do campeonato",
      image: "/placeholder.svg?height=100&width=150",
      time: "6 horas atrás",
    },
    {
      id: 4,
      title: "Operação policial prende quadrilha de assaltantes",
      image: "/placeholder.svg?height=100&width=150",
      time: "8 horas atrás",
    },
  ]

  const comments = [
    {
      id: 1,
      author: "Maria Santos",
      content: "Finalmente! Essas obras são muito necessárias, principalmente no bairro São José.",
      time: "2 horas atrás",
    },
    {
      id: 2,
      author: "Carlos Oliveira",
      content: "Espero que as obras sejam realizadas com qualidade e dentro do prazo.",
      time: "1 hora atrás",
    },
    {
      id: 3,
      author: "Ana Costa",
      content: "Ótima notícia! Vai melhorar muito a vida dos moradores desses bairros.",
      time: "30 minutos atrás",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header simplificado */}
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold">
              Arcoverde Agora
            </Link>
            <Link href="/">
              <Button variant="ghost" size="sm" className="text-white">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Conteúdo Principal */}
          <article className="lg:col-span-3">
            {/* Breadcrumb */}
            <nav className="mb-6 text-sm text-gray-600">
              <Link href="/" className="hover:text-blue-600">
                Início
              </Link>
              <span className="mx-2">/</span>
              <Link href="/politica" className="hover:text-blue-600">
                {noticia.category}
              </Link>
              <span className="mx-2">/</span>
              <span>Notícia</span>
            </nav>

            {/* Cabeçalho da Notícia */}
            <header className="mb-8">
              <Badge className="bg-blue-600 mb-4">{noticia.category}</Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">{noticia.title}</h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>Por {noticia.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>
                    {new Date(noticia.publishedAt).toLocaleDateString("pt-BR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  <span>{noticia.views} visualizações</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  <span>{noticia.comments} comentários</span>
                </div>
              </div>

              {/* Botões de Compartilhamento */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-sm font-medium text-gray-700">Compartilhar:</span>
                <Button size="sm" variant="outline" className="text-blue-600 border-blue-600">
                  <Facebook className="w-4 h-4 mr-2" />
                  Facebook
                </Button>
                <Button size="sm" variant="outline" className="text-blue-400 border-blue-400">
                  <Twitter className="w-4 h-4 mr-2" />
                  Twitter
                </Button>
                <Button size="sm" variant="outline" className="text-green-600 border-green-600">
                  <WhatsApp className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </header>

            {/* Imagem Principal */}
            <div className="relative h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
              <Image
                src={noticia.image || "/placeholder.svg"}
                alt={noticia.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Banner Publicitário */}
            <div className="mb-8">
              <Card className="bg-gradient-to-r from-orange-400 to-red-500 text-white p-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">Restaurante Sabor Caseiro</h3>
                  <p className="mb-3">Almoço executivo a partir de R$ 15,90. Delivery grátis!</p>
                  <Button variant="secondary">Fazer Pedido</Button>
                </div>
              </Card>
            </div>

            {/* Conteúdo da Notícia */}
            <div className="prose prose-lg max-w-none mb-8">
              <div
                className="text-gray-800 leading-relaxed space-y-4"
                dangerouslySetInnerHTML={{ __html: noticia.content }}
              />
            </div>

            {/* Tags */}
            <div className="mb-8">
              <h3 className="font-semibold mb-3">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {noticia.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="hover:bg-blue-50 cursor-pointer">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <Separator className="mb-8" />

            {/* Seção de Comentários */}
            <section className="mb-8">
              <h3 className="text-2xl font-bold mb-6">Comentários ({noticia.comments})</h3>

              {/* Formulário de Comentário */}
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-4">Deixe seu comentário</h4>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Seu nome"
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <input
                        type="email"
                        placeholder="Seu email"
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <textarea
                      placeholder="Escreva seu comentário..."
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Button className="bg-blue-600 hover:bg-blue-700">Enviar Comentário</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Lista de Comentários */}
              <div className="space-y-4">
                {comments.map((comment) => (
                  <Card key={comment.id}>
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <User className="w-5 h-5 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="font-semibold text-gray-900">{comment.author}</span>
                            <span className="text-sm text-gray-500">{comment.time}</span>
                          </div>
                          <p className="text-gray-700">{comment.content}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            {/* Banner Lateral */}
            <Card className="mb-6 bg-gradient-to-b from-green-400 to-blue-500 text-white">
              <CardContent className="p-4 text-center">
                <h3 className="font-bold mb-2">Clínica Saúde Total</h3>
                <p className="text-sm mb-3">Consultas e exames com os melhores profissionais</p>
                <Button variant="secondary" size="sm">
                  Agendar
                </Button>
              </CardContent>
            </Card>

            {/* Notícias Relacionadas */}
            <Card className="mb-6">
              <div className="bg-blue-600 text-white p-4">
                <h3 className="font-bold">Notícias Relacionadas</h3>
              </div>
              <CardContent className="p-0">
                {relatedNews.map((news) => (
                  <Link key={news.id} href={`/noticia/${news.id}`}>
                    <div className="p-4 border-b last:border-b-0 hover:bg-gray-50 cursor-pointer transition-colors">
                      <div className="flex gap-3">
                        <div className="relative w-16 h-16 flex-shrink-0">
                          <Image
                            src={news.image || "/placeholder.svg"}
                            alt={news.title}
                            fill
                            className="object-cover rounded"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-sm text-gray-900 leading-tight line-clamp-2 mb-1">
                            {news.title}
                          </h4>
                          <span className="text-xs text-gray-500">{news.time}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </CardContent>
            </Card>

            {/* Banner Lateral 2 */}
            <Card className="bg-gradient-to-b from-purple-500 to-pink-500 text-white">
              <CardContent className="p-4 text-center">
                <h3 className="font-bold mb-2">Loja de Roupas Elegante</h3>
                <p className="text-sm mb-3">Moda feminina e masculina com até 50% OFF</p>
                <Button variant="secondary" size="sm">
                  Ver Ofertas
                </Button>
              </CardContent>
            </Card>
          </aside>
        </div>
      </main>
    </div>
  )
}
