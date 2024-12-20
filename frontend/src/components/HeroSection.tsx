import "@fontsource/poppins";

export default function HeroSection() {
    return (
        <section
            style={{
                backgroundImage:
                    "url('https://cdn.pixabay.com/photo/2017/10/31/20/57/christmas-wallpaper-2906458_1280.jpg')", 
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "70vh", // Garante que ocupa a altura total da tela
                width: "100vw", // Garante que ocupa a largura total da tela
            }}
        >
            <div
                className="flex items-center justify-center h-full w-full bg-gradient-to-tr from-blue-500/50 to-pink-500/50 blur-4"
            >
                <h1 className="text-18xl md:text-9xl font-bold text-white drop-shadow-lg">
                    MÃO AMIGA
                </h1>
            </div>
        </section>
    );
}
