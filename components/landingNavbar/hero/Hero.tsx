import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <div className="hero bg-base-100 min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse relative">
        <Image
          src={'/hero.png'}
          alt="hero image"
          width={500}
          height={500}
          style={{ objectFit: 'cover', width: '50%', aspectRatio: '1/1' }}
          className="animate-fade animate-once animate-delay-[400ms]"
        ></Image>

        <div>
          <h1 className="text-5xl font-bold animate-flip-down animate-once">
            Przygotuj się do matury z naszymi darmowymi fiszkami!
          </h1>
          <p className="py-6 animate-flip-down animate-once">
            Zdobądź pewność siebie przed egzaminem dzięki naszym starannie
            opracowanym fiszkom. Ucz się w dowolnym miejscu i czasie, powtarzaj
            kluczowe zagadnienia i osiągnij sukces na maturze z łatwością!
          </p>
          <button className="btn btn-primary animate-fade-right animate-once animate-delay-[500ms]">
            Zaczynajmy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
