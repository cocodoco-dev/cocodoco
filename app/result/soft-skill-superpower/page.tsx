"use client";

export const dynamic = "force-dynamic";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

const results = {
  empathetic_listener: {
    title: "Empathetic Listener 💗",
    summary:
      "Your soft skill superpower is the ability to make people feel heard, understood, and emotionally safe.",
    desc1:
      "You have a rare way of listening that goes beyond words. People often feel that you truly notice their emotional reality, even when they struggle to explain it clearly. That kind of presence builds trust quickly because it makes others feel less alone.",
    desc2:
      "What makes this a superpower is that emotional understanding changes everything. It improves relationships, teamwork, and communication in a deep way. Your ability to listen with care can calm tension, strengthen connection, and help people open up honestly.",
    meaning1:
      "This result usually means your greatest interpersonal strength is emotional attunement. You are likely someone who notices tone, mood, hesitation, and the feeling behind what people say. Even when others cannot clearly express themselves, you often sense what matters emotionally.",
    meaning2:
      "Because of that, people may trust you more quickly than they trust others. You can create a feeling of emotional safety that makes honesty possible. In many situations, your real power is not that you have all the answers. It is that you make other people feel safe enough to tell the truth.",
    showUp1:
      "In real life, this can show up as listening without interrupting, asking thoughtful questions, noticing when someone is not okay, or making people feel less defensive during difficult conversations. You may often become the person others turn to when they need understanding more than judgment.",
    showUp2:
      "You may also bring emotional intelligence into group settings by sensing tension early and responding with care rather than force. That ability can improve team trust, friendships, family dynamics, and conflict resolution. The challenge is making sure your empathy does not quietly turn into emotional over-carrying.",
    strengths: "Empathy, trust-building, emotional awareness",
    strengthDetails:
      "Your strengths include emotional sensitivity, deep listening, relational trust, and the ability to make people feel seen in ways that matter. You often create stronger communication not by speaking the most, but by helping other people feel safe enough to say what is real.",
    watchOut: "Absorbing too much of other people’s stress",
    watchOutDetails:
      "What may feel difficult is knowing where empathy ends and emotional overload begins. Because you can feel people so clearly, you may sometimes take in stress that is not yours to carry. Over time, that can lead to exhaustion, blurred boundaries, or feeling responsible for other people’s healing.",
    bestMatch:
      "Roles and relationships where emotional intelligence matters deeply",
    growth1:
      "Growth for you often means learning that compassion works best when it includes boundaries. You do not have to feel everything for everyone in order to care well. Sometimes the healthiest empathy stays warm without becoming absorbent.",
    growth2:
      "The healthiest version of your superpower is deeply present but still protected. You can remain kind, open, and emotionally supportive while also remembering that your own energy deserves care too.",
    reminder:
      "Your ability to make people feel understood is rare. Just remember that understanding others should not come at the cost of abandoning yourself.",
  },

  calm_problem_solver: {
    title: "Calm Problem-Solver 🧠",
    summary:
      "Your soft skill superpower is staying clear-headed and practical when things get difficult.",
    desc1:
      "When other people feel scattered or stressed, you often become more focused. You naturally look for what matters most, what can be fixed, and what the next step should be. Instead of adding panic, you bring clarity and movement.",
    desc2:
      "That is a real superpower because difficult moments need people who can think steadily under pressure. You help situations feel more manageable by breaking down problems and responding with calm rather than chaos. People trust you because you make progress feel possible.",
    meaning1:
      "This result usually means your strength shows up most clearly when something needs structure, logic, and forward motion. You are likely someone who becomes useful fast when life gets messy. While others may get overwhelmed by the size of a problem, you tend to look for the next workable step.",
    meaning2:
      "Because of that, people may rely on you in moments of confusion, stress, or urgency. Your steadiness helps situations feel less impossible. One of your biggest gifts is making people believe that something can be handled because you know how to turn pressure into practical action.",
    showUp1:
      "In everyday life, this can show up as staying composed during setbacks, thinking through options quickly, organizing what matters first, or helping others move out of panic and into action. You may often be the person who quietly gets things back on track.",
    showUp2:
      "You may also bring a sense of competence that reassures people even before anything is solved. Your presence often says, this can be handled. The challenge is that solution-focused strength can sometimes move so quickly toward fixing that emotional reality gets less attention than it needs.",
    strengths: "Clear thinking, composure, practical action",
    strengthDetails:
      "Your strengths include steadiness under pressure, practical intelligence, structure, and the ability to make difficult situations feel manageable. You often contribute not only ideas, but usable direction. That kind of grounded problem-solving is one of the most dependable human strengths in high-pressure environments.",
    watchOut: "Focusing so much on solutions that feelings get overlooked",
    watchOutDetails:
      "What may feel difficult is slowing down enough to notice when a situation needs emotional care as much as practical progress. Sometimes people do need solutions, but sometimes they also need acknowledgment, reassurance, or space before they are ready to move forward.",
    bestMatch:
      "Fast-moving situations where steadiness and smart action matter",
    growth1:
      "Growth for you often means remembering that clarity and compassion can work together. You do not lose efficiency by making room for emotion. In fact, solutions often land better when people feel understood first.",
    growth2:
      "The healthiest version of your superpower is not just someone who fixes things. It is someone who brings calm direction while still staying connected to the human side of the problem.",
    reminder:
      "Your steadiness is powerful because it creates movement in hard moments. Just remember that not every problem needs fixing before it needs understanding.",
  },

  natural_connector: {
    title: "Natural Connector 🌷",
    summary:
      "Your soft skill superpower is bringing people together and creating real trust between them.",
    desc1:
      "You have a gift for reading social energy and helping people feel included. You often know how to soften awkwardness, create comfort, and make people feel like they belong. That ability is more powerful than it looks because strong relationships often shape the success of everything else.",
    desc2:
      "What makes this a superpower is that connection is not accidental. You help people move from distance to trust. In teams, friendships, and everyday interactions, your presence can improve the atmosphere and make collaboration feel much more natural.",
    meaning1:
      "This result usually means your real strength is social chemistry. You are likely someone who notices how people relate, where tension exists, who feels left out, and what would make a group function more smoothly. That awareness gives you unusual influence in human systems.",
    meaning2:
      "Because of that, you may be the person who helps things feel better without making a big announcement about it. Your gift often works quietly but powerfully. You help groups feel safer, more cooperative, and more human simply by how you move between people.",
    showUp1:
      "In real life, this can show up as introducing people well, smoothing group tension, making someone feel included quickly, sensing the social gap in a room, or helping collaboration happen without making it feel forced. You may often improve chemistry before anyone else fully realizes what was missing.",
    showUp2:
      "You may also create emotional belonging in ways that go beyond friendliness. People may trust each other more because you helped the tone become warmer and more open. The challenge is making sure you do not begin to feel responsible for every relationship, every mood, and everyone getting along all the time.",
    strengths: "Trust, inclusion, relationship-building",
    strengthDetails:
      "Your strengths include social intelligence, relational warmth, emotional inclusion, and the ability to build trust across different personalities. You often help people work better together not by control, but by connection. That is a rare and deeply valuable strength in both personal and professional life.",
    watchOut: "Taking too much responsibility for everyone getting along",
    watchOutDetails:
      "What may feel difficult is over-identifying with group harmony. Because you are good at creating connection, you may sometimes feel pressure to keep the peace, bridge every gap, or carry the emotional weight of the group. That can become draining when harmony starts to depend too heavily on you.",
    bestMatch:
      "Communities and teams where chemistry, belonging, and collaboration matter",
    growth1:
      "Growth for you often means remembering that connection works best when it is mutual. You can help create trust, but you are not responsible for managing every relationship or repairing every emotional fracture around you.",
    growth2:
      "The healthiest version of your superpower is still warm and connective, but less self-sacrificing. You can build belonging without disappearing into everyone else’s needs.",
    reminder:
      "Your ability to make people feel connected is powerful. Just remember that real belonging should include you too.",
  },

  quiet_leader: {
    title: "Quiet Leader 🌿",
    summary:
      "Your soft skill superpower is guiding people steadily without needing to dominate the room.",
    desc1:
      "You do not need to be loud to lead well. Your strength often shows up through calm presence, good judgment, and the ability to steady others when things feel uncertain. People may follow your energy because it feels grounded rather than performative.",
    desc2:
      "That is a superpower because not all leadership is dramatic. Some of the strongest leaders create trust through reliability, emotional steadiness, and thoughtful direction. You help people feel safer moving forward, even when you are not the one demanding attention.",
    meaning1:
      "This result usually means your influence comes through steadiness rather than volume. You are likely someone whose presence makes people feel more organized, more focused, or more secure in uncertain situations. Your authority tends to come from judgment and trust, not performance.",
    meaning2:
      "Because of that, people may rely on you more than you realize. Even if you do not see yourself as traditionally commanding, others may look to you because your energy feels dependable. Quiet leadership often works not by dominating attention, but by creating stability others want to follow.",
    showUp1:
      "In real life, this can show up as helping groups stay grounded, giving direction without ego, stepping in during uncertainty, or earning trust through consistency over time. You may not always be the first person to speak, but when you do, people often listen.",
    showUp2:
      "You may also influence people through the emotional tone you set. A calm leader changes the room without making a show of it. The challenge is that quieter leadership styles can sometimes be overlooked in spaces that equate leadership with visibility or loud confidence.",
    strengths: "Steadiness, judgment, grounded influence",
    strengthDetails:
      "Your strengths include calm influence, reliability, discernment, and the ability to move people forward without unnecessary noise. You often help others feel less scattered simply by staying centered yourself. That kind of grounded influence is one of the most trustworthy forms of leadership.",
    watchOut: "Being underestimated because your style is subtle",
    watchOutDetails:
      "What may feel difficult is that not everyone immediately recognizes quieter forms of authority. You may sometimes be underestimated by people who mistake loudness for strength. If that happens too often, you may also hesitate to claim your own influence even when it is clearly there.",
    bestMatch:
      "Situations where calm guidance and trust matter more than ego",
    growth1:
      "Growth for you often means allowing your quiet strength to become more visible when needed. You do not have to become a different person to lead more clearly. Sometimes your next step is simply letting your judgment take up a little more room.",
    growth2:
      "The healthiest version of your superpower remains grounded and calm, but no longer hides from visibility. You can lead with steadiness and still let others see that you are leading.",
    reminder:
      "You do not need to be the loudest person in the room to shape where the room is going.",
  },

  adaptable_mind: {
    title: "Adaptable Mind ⚡",
    summary:
      "Your soft skill superpower is adjusting quickly, learning fast, and staying flexible when life changes.",
    desc1:
      "You naturally know how to shift when the situation shifts. When plans change or unexpected problems appear, you are often able to regroup and respond without staying stuck for too long. That flexibility helps you move through uncertainty with more ease than many people can.",
    desc2:
      "What makes this a superpower is that change is everywhere. Your ability to adapt helps you stay resilient, useful, and forward-moving even when the path is unclear. You are often stronger than you realize because you know how to keep going without needing perfect conditions.",
    meaning1:
      "This result usually means your strength is flexibility under changing conditions. You are likely someone who learns by moving, adjusts when needed, and does not stay frozen for long when circumstances shift. In uncertain environments, that makes you especially effective.",
    meaning2:
      "Because of that, people may see you as resilient, resourceful, and mentally agile. You often help situations recover because you are willing to reorient instead of clinging too tightly to one plan. That kind of adaptability is one of the most useful traits in fast-changing environments.",
    showUp1:
      "In real life, this can show up as adjusting quickly to new roles, handling sudden changes with less resistance, learning systems fast, shifting communication style depending on the situation, or staying useful even when the original plan falls apart.",
    showUp2:
      "You may also bring emotional resilience by helping others accept change more smoothly. Your flexibility can reduce stress because you often model the idea that change is survivable. The challenge is that you may become so good at adjusting that your own preferences or deeper needs get pushed aside.",
    strengths: "Flexibility, resilience, quick adjustment",
    strengthDetails:
      "Your strengths include mental agility, resilience, openness to change, and the ability to stay effective even when conditions are unstable. You often bring movement where others get stuck. That capacity makes you valuable in environments that demand fast learning and real flexibility.",
    watchOut: "Adapting so well that your own preferences get ignored",
    watchOutDetails:
      "What may feel difficult is noticing when adaptability turns into self-neglect. Because you can bend so well, you may sometimes move around other people’s needs, priorities, or expectations until your own direction becomes blurry. Flexibility is powerful, but it still needs an inner center.",
    bestMatch:
      "Dynamic environments where learning, change, and resilience matter",
    growth1:
      "Growth for you often means pairing adaptability with stronger self-definition. You do not need to become rigid to stay grounded. You just need to remember what matters to you while you stay flexible around it.",
    growth2:
      "The healthiest version of your superpower is not endless adjustment. It is flexible movement with a stable core. That is what keeps adaptability from becoming drift.",
    reminder:
      "Your flexibility is a real strength. Just make sure you are adapting from choice, not disappearing in the process.",
  },

  clear_communicator: {
    title: "Clear Communicator ✨",
    summary:
      "Your soft skill superpower is making things understandable, honest, and easier for people to navigate.",
    desc1:
      "You have a gift for turning confusion into clarity. Whether you are explaining an idea, talking through tension, or helping people understand what matters, your words often make things feel simpler and more manageable. That kind of clarity is incredibly valuable.",
    desc2:
      "This is a superpower because communication shapes everything. When people feel confused, anxious, or disconnected, clear communication can restore trust and direction. You help others move forward because you know how to say what matters in a way people can actually receive.",
    meaning1:
      "This result usually means your strength is clarity under complexity. You are likely someone who can organize messy information, explain things in accessible language, and help people understand what matters without adding unnecessary noise. That is a rare ability.",
    meaning2:
      "Because of that, people may trust you to make things understandable when they feel unclear, tense, or overloaded. Your communication often does more than transfer information. It reduces anxiety, improves alignment, and gives people a better sense of how to move forward.",
    showUp1:
      "In real life, this can show up as explaining difficult ideas simply, helping teams stay aligned, naming tension in a useful way, clarifying expectations, or turning scattered thoughts into language people can work with. You may often be the one who helps everyone stop spiraling and start understanding.",
    showUp2:
      "You may also bring emotional steadiness through language because clarity can feel grounding. When people are confused, your ability to say what matters can restore trust quickly. The challenge is remembering that not everyone processes directness at the same speed or with the same emotional readiness.",
    strengths: "Clarity, honesty, understanding",
    strengthDetails:
      "Your strengths include direct but useful communication, conceptual clarity, alignment-building, and the ability to reduce confusion for others. You often help people move forward by making the path understandable. That kind of clarity is deeply valuable in both relationships and work.",
    watchOut: "Assuming people are ready to hear things as directly as you see them",
    watchOutDetails:
      "What may feel difficult is calibrating your clarity to emotional timing. Even when you are right, people are not always immediately ready for truth in its most direct form. Sometimes the message needs just as much care as the logic behind it.",
    bestMatch:
      "Roles and relationships where truth, clarity, and alignment matter",
    growth1:
      "Growth for you often means blending clarity with pacing. You do not need to become vague in order to be kind. You simply need to match the sharpness of your insight with enough emotional intelligence that people can truly receive it.",
    growth2:
      "The healthiest version of your superpower stays honest and precise, but also patient. That balance makes your communication not only clear, but transformative.",
    reminder:
      "Your words can create direction where there was confusion. Just remember that clarity lands best when people can actually meet it.",
  },
} as const;

type ResultKey = keyof typeof results;

function ResultContent() {
  const sp = useSearchParams();
  const rawKey = sp.get("type") as ResultKey | null;
  const key: ResultKey =
    rawKey && rawKey in results ? rawKey : "empathetic_listener";
  const r = results[key];

  const [copied, setCopied] = useState(false);

  const shareUrl = useMemo(() => {
    if (typeof window === "undefined") return "";
    return window.location.href;
  }, []);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      alert("Copy failed. Please copy from the address bar.");
    }
  }

  const adBoxStyle = {
    width: "100%",
    height: "110px",
    borderRadius: "14px",
    border: "1px dashed #f2a7b8",
    background: "rgba(255, 255, 255, 0.6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#9ca3af",
    fontSize: "14px",
  } as const;

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #fdf2f8 0%, #fff7ed 45%, #fefce8 100%)",
        fontFamily: "Arial, sans-serif",
        padding: "42px 18px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "min(860px, 100%)", textAlign: "center" }}>
        <p
          style={{
            margin: "0 0 10px",
            fontSize: "13px",
            fontWeight: 700,
            letterSpacing: "0.08em",
            color: "#9d174d",
            textTransform: "uppercase",
          }}
        >
          Career & Personality Result
        </p>

        <h1
          style={{
            fontSize: "40px",
            lineHeight: 1.2,
            marginBottom: "12px",
            color: "#111827",
          }}
        >
          {r.title}
        </h1>

        <p
          style={{
            fontSize: "20px",
            fontWeight: 700,
            color: "#374151",
            marginBottom: "22px",
            lineHeight: 1.7,
          }}
        >
          {r.summary}
        </p>

        <div style={{ ...adBoxStyle, marginBottom: "22px" }}>
          Ad Space (Google AdSense will go here)
        </div>

        <div
          style={{
            background: "rgba(255,255,255,0.76)",
            border: "1px solid #f2a7b8",
            borderRadius: "18px",
            padding: "24px",
            textAlign: "left",
            lineHeight: 1.8,
            color: "#374151",
            boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
          }}
        >
          <p style={{ marginTop: 0 }}>{r.desc1}</p>
          <p>{r.desc2}</p>

          <h2
            style={{
              fontSize: "22px",
              fontWeight: 700,
              marginTop: "26px",
              marginBottom: "12px",
              color: "#111827",
            }}
          >
            What this result means
          </h2>

          <p>{r.meaning1}</p>
          <p>{r.meaning2}</p>

          <h2
            style={{
              fontSize: "22px",
              fontWeight: 700,
              marginTop: "26px",
              marginBottom: "12px",
              color: "#111827",
            }}
          >
            How this strength can show up
          </h2>

          <p>{r.showUp1}</p>
          <p>{r.showUp2}</p>

          <h2
            style={{
              fontSize: "22px",
              fontWeight: 700,
              marginTop: "26px",
              marginBottom: "12px",
              color: "#111827",
            }}
          >
            Your strengths
          </h2>

          <p style={{ marginBottom: "10px" }}>
            <strong>Main strengths:</strong> {r.strengths}
          </p>
          <p>{r.strengthDetails}</p>

          <h2
            style={{
              fontSize: "22px",
              fontWeight: 700,
              marginTop: "26px",
              marginBottom: "12px",
              color: "#111827",
            }}
          >
            What may feel difficult
          </h2>

          <p style={{ marginBottom: "10px" }}>
            <strong>Watch out for:</strong> {r.watchOut}
          </p>
          <p>{r.watchOutDetails}</p>

          <h2
            style={{
              fontSize: "22px",
              fontWeight: 700,
              marginTop: "26px",
              marginBottom: "12px",
              color: "#111827",
            }}
          >
            Growth path
          </h2>

          <p>{r.growth1}</p>
          <p>{r.growth2}</p>

          <h2
            style={{
              fontSize: "22px",
              fontWeight: 700,
              marginTop: "26px",
              marginBottom: "12px",
              color: "#111827",
            }}
          >
            A small reminder for you
          </h2>

          <p style={{ marginBottom: "18px" }}>{r.reminder}</p>

          <div style={{ marginTop: "18px" }}>
            <p style={{ margin: "10px 0" }}>
              <strong>Best match:</strong> {r.bestMatch}
            </p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: "22px",
          }}
        >
          <button
            onClick={copyLink}
            style={{
              padding: "12px 22px",
              background: copied ? "#22c55e" : "#111827",
              color: "white",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            {copied ? "Copied!" : "Share result"}
          </button>

          <a
            href="/quiz/soft-skill-superpower"
            style={{
              padding: "12px 22px",
              background: "#ff8fab",
              color: "white",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Try again
          </a>

          <a
            href="/"
            style={{
              padding: "12px 22px",
              background: "white",
              color: "#111827",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: "bold",
              border: "1px solid #e5e7eb",
            }}
          >
            Other tests
          </a>
        </div>

        <div style={{ ...adBoxStyle, marginTop: "22px" }}>
          Ad Space (Google AdSense will go here)
        </div>
      </div>
    </main>
  );
}

export default function SoftSkillSuperpowerResult() {
  return (
    <Suspense fallback={<div style={{ padding: "40px" }}>Loading...</div>}>
      <ResultContent />
    </Suspense>
  );
}