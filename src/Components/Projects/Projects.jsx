import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Timesheet - GMAP Location',
    description:
      'Employees clock in and out based on GPS data, ensuring accurate attendance and verifying they are at the correct job site.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Payroll App',
    description:
      'Payroll calculates based on shifts and attendance, including loan deductions, ensuring accurate wages and financial management for factories.',
    icon: FingerPrintIcon,
  },
  {
    name: 'Travel Agency',
    description:
      'Automatic itinerary generation for travel agencies creates personalized travel plans by integrating booking details, destinations, and schedules into cohesive itineraries.',
    icon: LockClosedIcon,
  },
  {
    name: 'Workforce AI',
    description:
      'An AI application for document scanning uses OpenAI’s API to analyze uploaded documents, prompts users for specific information, and provides responses based on the document content.',
    icon: ArrowPathIcon,
  },
]

export default function Projects() {
  return (
    <div className="bg-gray-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Projects
          </p>
          <p className="mt-4 text-lg text-gray-600">
            Here are some of the projects I've worked on that demonstrate my skills and expertise.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid gap-x-8 gap-y-10 lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <div className="absolute top-0 left-0 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-800 text-white">
                  <feature.icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <div className="ml-16">
                  <dt className="text-lg font-semibold text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-base text-gray-600">{feature.description}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
