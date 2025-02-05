import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import PlayerCarousel from "@/components/PlayerCarousel"
import FeaturedContent from "@/components/FeaturedContent"
import ProjectDemo from "@/components/ProjectDemo"
import PopularSection from "@/components/PopularSection"
import LatestNews from "@/components/LatestNews"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section with Featured Content */}
      <FeaturedContent />

      {/* Project Demo Section */}
      <ProjectDemo />

      {/* Game Description Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">About Baseball</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-4">
                Baseball is a bat-and-ball game played between two teams of nine players each, who take turns batting
                and fielding. The game proceeds when a player on the fielding team, called the pitcher, throws a ball
                which a player on the batting team tries to hit with a bat.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                The objective of the offensive team (batting team) is to hit the ball into the field of play, allowing
                its players to run the bases, having them advance counter-clockwise around four bases to score what are
                called "runs". The objective of the defensive team (fielding team) is to prevent batters from becoming
                runners, and to prevent runners' advance around the bases.
              </p>
              <p className="text-lg text-gray-700">
                A run is scored when a runner legally advances around the bases in order and touches home plate. The
                team that scores the most runs by the end of the game is the winner.
              </p>
            </div>
            <div className="relative aspect-video">
              <Image src="/ml.webp" alt="Baseball Field" fill className="rounded-lg object-cover shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Player Carousel */}
      {/* <section className="bg-gray-100 py-8 border-b">
        <div className="container mx-auto px-4">
          <PlayerCarousel />
        </div>
      </section> */}

      {/* Main Content Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2">
            <PopularSection />
          </div>

        </div>
      </div>
    </div>
  )
}

