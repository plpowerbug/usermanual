"use client"

import { useEffect } from "react"
import { useSearchParams } from "next/navigation"

export default function IntroductionContent() {
  const searchParams = useSearchParams()

  useEffect(() => {
    const hash = searchParams.get("scrollTo")
    if (hash) {
      const element = document.getElementById(hash)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }, [searchParams])

  return (
    <main className="mx-auto max-w-3xl">
      <h1 className="mb-6 text-4xl font-bold">Welcome to Our User Manual</h1>

      <h2 id="Overview" className="mb-4 mt-8 text-2xl font-semibold">
        Overview
      </h2>

      <ul className="mb-4 list-inside list-disc space-y-1">
        <li className="font-semibold">Purpose of this manual</li>
      </ul>
      <p className="mb-4">
        The purpose of this manual is to provide comprehensive guidance on the use of Achieva CRM, a CRM system
        specifically developed to streamline the entire process of educational applications, including university
        applications. This manual aims to assist users in effectively navigating and utilizing Achieva's features to
        manage student information, track application progress, and facilitate communication with educational
        organizations and institutions.
      </p>
      <p className="mb-4 list-inside">
        By following this manual, users will gain a thorough understanding of how to leverage Achieva to improve
        efficiency and accuracy in handling educational applications. Whether you are an agent manager, a member of the
        admissions team, a counsellor (B2B or B2C), or an administrator, this manual is designed to help you make the
        most of Achieva's capabilities to support students throughout their whole application journey.
      </p>
      <ul className="mb-4 list-inside list-disc space-y-1">
        <li className="font-semibold">Description of the Achieva CRM system</li>
      </ul>
      <p className="mb-4">
        Achieva CRM acts as a leads generating student recruitment CRM platform where genuine students' enquiries will
        be linked to your automated CRM platform for application submissions. CRM users will also have access to Achieva
        AI Pro, which serves to assist your course advisor/counsellor during consultations.
      </p>

      <h2 id="Audience" className="mb-4 mt-8 text-2xl font-semibold">
        Audience
      </h2>

      <ul className="mb-4 list-inside list-disc space-y-1">
        <li>Intended users (e.g., marketing, finance, sales teams, agent managers, admin, B2B & B2C counsellor)</li>
      </ul>
      <p className="mb-4">
        If you have any questions or need further assistance, don&apos;t hesitate to reach out to our support team.
      </p>
      <h2 id="Design Approach" className="mb-4 mt-8 text-2xl font-semibold">
        Design Approach
      </h2>
      <ul className="mb-4 list-inside list-disc space-y-1">
        <li>
          This User Manual is designed with a <strong>task-oriented approach.</strong>
        </li>
        <li>
          For a comprehensive <strong>User Manual</strong> for Achieva CRM with a{" "}
          <strong>task-oriented approach</strong>, it mainly breaks down the core functionalities into searchable{" "}
          <strong>"how-to" entries</strong>. Each entry will address <strong>a specific action or feature</strong> users
          may want to perform, with <strong>step-by-step guides</strong> and{" "}
          <strong>relevant screenshots or instructions</strong> about the screen they are interacting with.
        </li>
      </ul>
    </main>
  )
}

