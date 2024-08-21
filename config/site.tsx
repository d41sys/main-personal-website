export const siteConfig = {
  name: './d41sy',
  url: 'https://ui.shadcn.com',
  ogImage: 'https://ui.shadcn.com/og.jpg',
  description:
    'Personal website of d41sy, a master researcher in the IoT Network lab at the Mobility Security Convergence department of Soonchunhyang University.',
  links: {
    twitter: 'https://twitter.com/d41sy___',
    github: 'https://github.com/d41sys',
    mail: 'mailto:tiendatt.716@gmail.com',
  },
  paths: { About: '/about', Articles: '/articles', Projects: '/projects', Portfolio: '/portfolio' },
  bio: [
    'I am a master researcher in the #Link{https://sites.google.com/view/iot-network-lab-sch/home?authuser=0}{IoT Network lab} at the Mobility Security Convergence department of #Link{https://home.sch.ac.kr/en/index.jsp}{Soonchunhyang University}, under the supervision of #Link{https://sites.google.com/view/iot-network-lab-sch/introduction?authuser=0}{Prof. DaeHee Kim}',
    'My research focuses on various subjects in machine learning and system security, mainly V2X environment security, machine learning-based intrusion detection systems, mobile security, and privacy.',
    'I obtained a Bachelor of Information Technology at #Link{https://hcmus.edu.vn/}{HCMUS} in Vietnam. My bachelor’s thesis is about IoT hacking under the supervision of #Link{https://pakkunandy.github.io/}{MSE. Anh-Duy Tran}.',
    'I have worked for nearly 2 years in #Link{https://zalo.careers/}{Zalo} - Vietnam’s biggest instant message application, where I mainly researched system hacking and privacy.',
  ],
  // bio: ["I am a master researcher in the #Link{https://sites.google.com/view/iot-network-lab-sch/home?authuser=0}{IoT Network lab} at the Mobility Security Convergence department of Soonchunhyang University, under the supervision of Prof. DaeHee Kim.", "My research focuses on various subjects in machine learning and system security, mainly V2X environment security, machine learning-based intrusion detection systems, mobile security, and privacy.", "I obtained a Bachelor of Information Technology at HCMUS in Vietnam. My bachelor’s thesis is about IoT hacking under the supervision of MSE. Anh-Duy Tran.", "I have worked for nearly 2 years in Zalo - Vietnam’s biggest instant message application, where I mainly researched system hacking and privacy."]
};

export type SiteConfig = typeof siteConfig;
