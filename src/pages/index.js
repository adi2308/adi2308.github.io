import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-[#0a192f] text-white h-screen flex items-center px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-400 mb-4 text-lg">Hi, my name is</p>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-100 mb-2">Adnan Shaikh.</h1>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-400 mb-6">
            I explore the human side of economics.
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            I study humans and patterns — through the lens of economics.
            From macro trends to behavioral insights, I explore how data and research can drive meaningful change.
            I’m a master's student at{" "}
            <a
              href="https://www.uni-halle.de/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:underline"
            >
              Martin Luther University Halle-Wittenberg
            </a>{" "}
            and a research assistant at the{" "}
            <a
              href="https://www.iwh-halle.de/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:underline"
            >
              Halle Institute for Economic Research (IWH)
            </a>.
          </p>

          <a
            href="#"
            className="inline-block border border-green-400 text-green-400 px-6 py-3 rounded-md hover:bg-green-400 hover:text-[#0a192f] transition"
          >
            Check out my course!
          </a>
        </div>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage
