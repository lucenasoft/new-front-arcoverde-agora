import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function PublicidadeGrid() {
  const anunciantes = [
    {
      id: 1,
      nome: "Farmácia São José",
      slogan: "Medicamentos com os melhores preços!",
      cor: "from-green-400 to-teal-500",
      icone: "💊",
    },
    {
      id: 2,
      nome: "Restaurante Sabor Caseiro",
      slogan: "Almoço executivo a partir de R$ 15,90",
      cor: "from-orange-400 to-red-500",
      icone: "🍽️",
    },
    {
      id: 3,
      nome: "Loja Elegante",
      slogan: "Moda feminina e masculina",
      cor: "from-purple-400 to-pink-500",
      icone: "👗",
    },
    {
      id: 4,
      nome: "Oficina do Zé",
      slogan: "Serviços automotivos de qualidade",
      cor: "from-blue-400 to-indigo-500",
      icone: "🔧",
    },
    {
      id: 5,
      nome: "Padaria Central",
      slogan: "Pães frescos todos os dias",
      cor: "from-yellow-400 to-orange-500",
      icone: "🥖",
    },
    {
      id: 6,
      nome: "Pet Shop Amigo Fiel",
      slogan: "Tudo para seu pet",
      cor: "from-pink-400 to-rose-500",
      icone: "🐕",
    },
  ]

  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900 flex items-center">
          Nossos Parceiros
          <div className="ml-3 h-1 w-8 bg-blue-600 rounded"></div>
        </h2>
        <Button variant="outline" size="sm">
          Anuncie Aqui
        </Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {anunciantes.map((anunciante) => (
          <Card
            key={anunciante.id}
            className={`bg-gradient-to-br ${anunciante.cor} text-white hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105`}
          >
            <CardContent className="p-4 text-center">
              <div className="text-2xl mb-2">{anunciante.icone}</div>
              <h3 className="font-bold text-sm mb-1 leading-tight">{anunciante.nome}</h3>
              <p className="text-xs opacity-90 leading-tight">{anunciante.slogan}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
