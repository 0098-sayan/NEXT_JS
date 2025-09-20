"use client"
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal"

const content = [
  {
    title: "Discover Your Sound with Us: A Personal Journey in Music Mastery",
    description:
      "Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.",
    content: (
      <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-lg">
        <img
          src="/first.png"
          width={600}
          height={400}
          className="h-full w-full object-cover"
          alt="first image"
        />
      </div>
    ),
  },
  {
    title: "Live Feedback & Engagement",
    description:
      "Immerse yourself in an interactive learning experience where feedback is immediate, just like real-time changes in a collaborative project. This approach enhances your understanding and mastery of music concepts and performance techniques.",
    content: (
      <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-lg">
        <img
          src="/second.png"
          width={600}
          height={400}
          className="h-full w-full object-cover"
          alt="second image"
        />
      </div>
    ),
  },
  {
    title: "Cutting-Edge Curriculum",
    description:
      "Our curriculum is continuously updated to include the latest music education trends and technologies, ensuring you\'re always learning with the most current and effective methods. Say goodbye to outdated materials and welcome an education that evolves with the industry.",
    content: (
      <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-lg">
        <img
          src="/third.png"
          width={600}
          height={400}
          className="h-full w-full object-cover"
          alt="third image"
        />
      </div>
    ),
  },
  {
    title: "Limitless Learning Opportunities",
    description:
      "With our expansive resource library and dynamic course offerings, you\'ll never find yourself without something new to explore. Our platform provides continuous opportunities for growth, ensuring your musical skills are always advancing.",
    content: (
      <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-lg">
        <img
          src="/fourth.png"
          width={600}
          height={400}
          className="h-full w-full object-cover"
          alt="Fourth image"
        />
      </div>
    ),
  },
    {
    title: "Studio-Quality Recording Experience",
    description:
      "Access professional-grade recording equipment and production tools that mirror real industry standards. Create polished recordings of your performances and compositions while learning the technical aspects of modern music production.",
    content: (
      <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-lg">
        <img
          src="/fifth.png"
          width={600}
          height={400}
          className="h-full w-full object-cover"
          alt="Fifth image"
        />
      </div>
    ),
  },
    {
    title: "Collaborative Music Community",
    description:
      "Join a vibrant community of fellow musicians where collaboration thrives. Participate in ensemble performances, songwriting sessions, and creative projects that expand your musical horizons and build lasting connections.",
    content: (
      <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-lg">
        <img
          src="/sixth.png"
          width={600}
          height={400}
          className="h-full w-full object-cover"
          alt="Sixth image"
        />
      </div>
    ),
  },
  {
    title: "Expert Mentorship & Guidance",
    description:
      "Learn from seasoned professionals who bring years of industry experience to your musical education. Our expert mentors provide personalized guidance, helping you navigate complex techniques while building confidence in your unique artistic voice.",
    content: (
      <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-lg">
        <img
          src="/seventh.png"
          width={600}
          height={400}
          className="h-full w-full object-cover"
          alt="Seventh Image"
        />
      </div>
    ),
  },
]

export default function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={content} />
    </div>
  )
}
