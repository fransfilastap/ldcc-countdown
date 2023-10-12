import Countdown from "react-countdown";
import LogoLDCC from "./logo";

const Completionist = () => (
  <span className="text-3xl text-white">Voting selesai. ✨</span>
);

function App() {
  const voteCloseTime = new Date(Date.parse("2023-10-12T14:00:00"));

  return (
    <main className="bg-black h-[100vh] w-full flex flex-col items-center justify-center">
      <div className="relative flex flex-col items-center justify-center w-full h-full overflow-hidden">
        <div className="z-30 flex flex-col items-center justify-center gap-2">
          <LogoLDCC />
          <h1 className="text-2xl text-white lg:text-6xl font-roboto">
            LDCC Awards 2023
          </h1>
          <div className="p-4 w-full border-4 min-h-[10vh] lg:min-h-[30vh] flex justify-center items-center shadow-lg">
            <Countdown
              className="text-5xl text-center text-white font-roboto lg:text-8xl"
              date={voteCloseTime}
            >
              <Completionist />
            </Countdown>
          </div>
        </div>
        <video
          className="absolute h-full w-full object-cover z-10 brightness-[0.3]"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src={
              "https://res.cloudinary.com/dhtk5fgay/video/upload/v1690026504/pexels_videos_2759484_720p_nkk9pg.mp4"
            }
            type="video/mp4"
          />
        </video>
      </div>
    </main>
  );
}

export default App;
