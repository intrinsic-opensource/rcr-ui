import React from 'react'

interface FooterProps {}

export const REPORT_LINK =
  'https://github.com/intrinsic-opensource/ros-central-registry/tree/main/docs#requesting-to-take-down-a-module'
export const BCR_UI_REPO_LINK = 'https://github.com/bazel-contrib/bcr-ui'

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-ros-blue flex flex-col items-center justify-center gap-2 h-18 mt-4 py-2.5">
      <div className="text-center text-white">
        The ROS Central Registry is maintained by the ROS PMC.
      </div>
      <div className="text-center text-white">
        To report an issue with one of the modules, see the{' '}
        <a
          href={REPORT_LINK}
          className="text-white hover:text-gray-300"
        >
          instructions here
        </a>
        .
      </div>
      <div className="text-center text-white">
        The source of this website can be found in{' '}
        <a
          href={BCR_UI_REPO_LINK}
          className="text-white hover:text-gray-300"
        >
          this repository
        </a>
        .
      </div>
    </footer>
  )
}
