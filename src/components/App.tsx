function App() {
  return (
    <div className="h-screen text-lg leading-none bg-fuchsia-50">
      <div className="flex flex-col justify-between p-4 max-w-[375px] h-full">
        <header>
          <h2 className="text-[128px] font-black leading-[75%]">
            syra
            <br />
            dar
          </h2>
          <div>frontend and design</div>
          <h1 className="font-black">david malmström</h1>
        </header>

        <div className="flex flex-col gap-8">
          <div
            className="flex gap-4 p-2 bg-white border border-slate-900"
            style={{ boxShadow: '8px 8px 0 0 #FF25A4' }}
          >
            <div>
              <div>building</div>
              <div className="font-black">rpg gm app</div>
            </div>
            <div>image</div>
          </div>

          <div
            className="flex gap-4 p-2 bg-white border border-slate-900"
            style={{ boxShadow: '8px 8px 0 0 #FF25A4' }}
          >
            <div>
              <div>layouting</div>
              <div className="font-black">free rpg products</div>
            </div>
            <div>image</div>
          </div>
        </div>

        <div className="flex gap-8 mb-24">
          <a className="group" href="https://github.com/syradar">
            <div>code</div>
            <div className="font-black text-[#FF25A4] group-hover:underline">
              github
            </div>
          </a>

          <a className="group" href="https://www.linkedin.com/in/hdmalmstrom/">
            <div>work</div>
            <div className="font-black text-[#FF25A4] group-hover:underline">
              linkedin
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
