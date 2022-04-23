function App() {
  return (
    <div className="h-screen text-lg leading-none bg-fuchsia-50">
      <div className="flex flex-col justify-between p-4 max-w-[375px] h-full">
        <header>
          <img
            className="mb-4 text-[128px] font-black leading-[75%] break-all"
            src="syradar-logo.png"
            alt="syradar"
            width="274"
            height="175"
          />

          <h2>developer and designer in stockholm</h2>
          <h1 className="font-black">david malmström</h1>
        </header>

        <div>
          <h2 className="mb-2">skills</h2>
          <ul className="flex flex-wrap gap-2 justify-between">
            <li className="p-1 text-sm text-slate-600 bg-white rounded border border-slate-600">
              typescript
            </li>
            <li className="p-1 text-sm text-slate-600 bg-white rounded border border-slate-600">
              angular
            </li>
            <li className="p-1 text-sm text-slate-600 bg-white rounded border border-slate-600">
              react
            </li>
            <li className="p-1 text-sm text-slate-600 bg-white rounded border border-slate-600">
              figma
            </li>
            <li className="p-1 text-sm text-slate-600 bg-white rounded border border-slate-600">
              .net
            </li>

            <li className="p-1 text-sm text-slate-600 bg-white rounded border border-slate-600">
              agile
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <a
            href="https://syradar.github.io/yxans-klagan/"
            className="group grid grid-cols-2 gap-4 p-2 bg-white rounded border border-slate-600"
            style={{ boxShadow: '4px 4px 0 0 #FF25A4' }}
          >
            <div>
              <div>building</div>
              <div className="font-black group-hover:text-[#FF25A4] group-hover:underline">
                rpg gm app
              </div>
            </div>
            <img
              className="grayscale group-hover:grayscale-0 transition"
              src="yxans-klagan-logo.png"
              alt="Yxans klagan logo"
            />
          </a>

          <a
            href="https://www.rollspelskollektivet.se/"
            className="group grid grid-cols-2 gap-4 p-2 bg-white rounded border border-slate-600"
            style={{ boxShadow: '4px 4px 0 0 #FF25A4' }}
          >
            <div>
              <div>layouting</div>
              <div className="font-black group-hover:text-[#FF25A4] group-hover:underline">
                free rpg products
              </div>
            </div>
            <img
              className="grayscale group-hover:grayscale-0 transition"
              src="rk-logo.png"
              alt="Rollspelskollektivet"
            />
          </a>
        </div>

        <div className="flex gap-8 mb-4">
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
