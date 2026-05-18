// Scenario data for "Create Urgency When a Customer Reveals a Gap" game
// Proof of Concept - 4 scenarios (one per gap)

const scenarios = [
  // ACCOUNTABILITY SCENARIO
  {
    id: 1,
    gap: "Accountability",
    scenario: "All our agents share the same database credential.",
    question: "Why does this matter to the customer?",
    options: [
      {
        text: "Shared credentials make it harder to track which agent performed which action, which could complicate your audit processes and make it more difficult to understand system usage patterns over time.",
        score: 1,
        feedback: "You're identifying a problem, but 'harder' and 'could complicate' are too soft. What are the actual business consequences when you can't track actions?"
      },
      {
        text: "This approach doesn't follow security best practices for identity management, and most compliance frameworks recommend unique identifiers for all system actors to maintain proper governance and control.",
        score: 0,
        feedback: "This is about compliance and best practices, but doesn't explain the business impact. Why should the customer care? What happens if they don't fix this?"
      },
      {
        text: "If there's a breach, you won't be able to trace which agent was compromised—making forensics impossible and extending your recovery time by weeks or months.",
        score: 3,
        feedback: "Excellent! You've clearly connected the gap to specific business consequences: impossible forensics and extended recovery time. This creates real urgency."
      }
    ],
    correctIndex: 2,
    imperative: "Register Agents",
    learningPoints: [
      "Identifies specific consequence (impossible forensics)",
      "Uses business language (recovery time)",
      "Creates urgency (breach scenario)",
      "Quantifies impact (weeks or months)"
    ]
  },

  // OVER-PRIVILEGE SCENARIO
  {
    id: 2,
    gap: "Over-Privilege",
    scenario: "Our agents have broad, standing permissions to all customer data.",
    question: "Why does this matter to the customer?",
    options: [
      {
        text: "Having excessive permissions increases your overall security risk profile and creates additional management overhead for your security team, who need to monitor and maintain these broad access grants across your environment.",
        score: 0,
        feedback: "This mentions risk and overhead, but it's too abstract. What does 'increased risk profile' actually mean for the business? What's the real consequence?"
      },
      {
        text: "If one agent is compromised, the attacker immediately has access to your entire customer database—meaning a single breach could expose millions of records.",
        score: 3,
        feedback: "Excellent! You've explained the blast radius clearly and quantified the potential impact (millions of records). This makes the risk tangible and urgent."
      },
      {
        text: "This configuration doesn't align with the principle of least privilege, which is a foundational security concept that helps organizations minimize their attack surface and reduce the potential impact of security incidents.",
        score: 1,
        feedback: "You're citing a security principle, but 'minimize attack surface' is still technical. What does that mean in business terms? What's the actual consequence?"
      }
    ],
    correctIndex: 1,
    imperative: "Build to Least Privilege",
    learningPoints: [
      "Explains blast radius concept clearly",
      "Quantifies potential impact (millions of records)",
      "Uses breach scenario to create urgency",
      "Connects technical gap to business consequence"
    ]
  },

  // DELEGATION / IMPERSONATION SCENARIO
  {
    id: 3,
    gap: "Delegation / Impersonation",
    scenario: "Our agents inherit the identity of the user who launched them.",
    question: "Why does this matter to the customer?",
    options: [
      {
        text: "This creates challenges for your security operations team when they need to investigate incidents, as they'll need to spend additional time correlating logs and determining the actual source of actions, which can slow down your response capabilities.",
        score: 1,
        feedback: "You're identifying an operational challenge, but 'additional time' and 'slow down' don't convey the severity. What's the actual business impact of this delay?"
      },
      {
        text: "When you review logs, you can't tell if it was the user or the agent who accessed sensitive data—which means you can't distinguish between legitimate user activity and potentially malicious agent behavior.",
        score: 3,
        feedback: "Perfect! You've explained the visibility gap and its consequence: inability to distinguish legitimate from malicious activity. This is a clear security and compliance risk."
      },
      {
        text: "Identity inheritance patterns can make it more difficult to implement proper role-based access controls and may require additional configuration in your identity management systems to ensure appropriate separation of duties.",
        score: 0,
        feedback: "This is about implementation complexity, not business impact. Why should the customer care about configuration difficulty? What's the risk if they don't address this?"
      }
    ],
    correctIndex: 1,
    imperative: "Tie Actions to Intent",
    learningPoints: [
      "Explains the visibility gap clearly",
      "Shows inability to distinguish activities",
      "Connects to both security and compliance",
      "Uses concrete scenario (reviewing logs)"
    ]
  },

  // LAST MILE ACCESS SCENARIO
  {
    id: 4,
    gap: "Last Mile Access",
    scenario: "We validate agent permissions when they start, but not when they execute actions.",
    question: "Why does this matter to the customer?",
    options: [
      {
        text: "This approach creates a gap between your policy enforcement and actual execution, which means your security controls aren't being applied consistently throughout the agent lifecycle and may not reflect your current security posture.",
        score: 1,
        feedback: "You're identifying an inconsistency, but 'gap' and 'not consistently' are too vague. What actually happens because of this gap? What's the business consequence?"
      },
      {
        text: "An agent's permissions could change or be revoked, but the agent keeps operating with old permissions—meaning you think you've locked down access, but the agent is still executing high-risk actions at machine speed.",
        score: 3,
        feedback: "Perfect! You've explained the time-gap risk and the false sense of security. The 'machine speed' language emphasizes the urgency and scale of the problem."
      },
      {
        text: "Without continuous validation, you're relying on point-in-time authorization checks that may not account for dynamic changes in your environment, which could lead to situations where access decisions don't reflect the most current security policies.",
        score: 0,
        feedback: "This is technically accurate but too abstract. 'May not account for' and 'could lead to' don't create urgency. What's the actual business risk?"
      }
    ],
    correctIndex: 1,
    imperative: "Enforce Last Mile",
    learningPoints: [
      "Explains the time-gap risk clearly",
      "Shows false sense of security",
      "Uses 'machine speed' to emphasize urgency",
      "Connects to high-risk actions"
    ]
  }
];

// Export for use in game.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = scenarios;
}

// Made with Bob
