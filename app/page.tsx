import Image from "next/image";

export default function Home() {
  return (
    
    <main className="min-h-screen">

      {/* Hero Section */}
      <section className="page-x-padding">
        <div className="relative w-full h-[80vh] rounded-2xl overflow-hidden shadow-2xl">
           <div className="absolute inset-0 flex items-center  justify-center text-zinc-400 italic">
              <Image 
                src="/images/home/home_hero.jpg" 
                alt="Descrição da imagem"
                fill
                className="object-cover"
              />
           </div>
        </div>
      </section>

    
    </main>
  );
}