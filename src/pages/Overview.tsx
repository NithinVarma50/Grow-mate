const Overview = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-10 prose prose-slate max-w-3xl">
        <p><strong>Perfect, let’s build you a complete, crystal-clear overview of your hackathon project so your team has a north star. I’ll lay it out like a product spec + pitch. 🚀</strong></p>

        <hr />

        <h1>🌱 Smart Farm AI – Complete Idea Overview</h1>

        <h2>1️⃣ Problem</h2>
        <ul>
          <li>Forgetting care routines (watering, fertilizing, etc.)</li>
          <li>Not knowing breed-specific needs</li>
          <li>Overwatering/underwatering due to weather</li>
          <li>No encouragement → lose motivation → plants die</li>
        </ul>

        <h2>2️⃣ Solution</h2>
        <p><strong>Smart Farm AI</strong> = A <strong>gamified plant care assistant</strong> that uses <strong>AI + weather intelligence</strong> to:</p>
        <ul>
          <li>Identify plant species automatically</li>
          <li>Adjust care routines dynamically (breed + weather)</li>
          <li>Send friendly reminders + actionable tips</li>
          <li>Alert for diseases or poor growth signs</li>
          <li>Motivate users with gamification (badges, XP, moods, growth charts)</li>
        </ul>

        <h2>3️⃣ Core Features (MVP)</h2>
        <h3>🪴 Plant Setup & Identification</h3>
        <ul>
          <li>Upload plant photo → AI (Plant.id API or ML model) identifies breed.</li>
          <li>User adds nickname + location (balcony, garden, desk).</li>
          <li>System auto-calculates: space required, watering frequency, light needs.</li>
        </ul>

        <h3>💧 Smart Watering & Weather-Based Scheduler</h3>
        <ul>
          <li>Pulls weather data via <strong>OpenWeather API</strong>.</li>
          <li>Skips watering if rain is forecasted.</li>
          <li>Suggests extra hydration during heat waves.</li>
          <li>Simple “Water Now” button → logs action + updates streak.</li>
        </ul>

        <h3>📊 Growth Tracking & Tips</h3>
        <ul>
          <li>Users log growth (height, leaf count) → system shows timeline chart.</li>
          <li>Breed-specific weekly tips → e.g., “Your Aloe Vera thrives better with indirect sunlight.”</li>
          <li>Seasonal checklists → “Winter care: reduce watering by half.”</li>
        </ul>

        <h3>🚨 Plant Health & Disease Alerts</h3>
        <ul>
          <li>Upload a photo of leaves → AI or rule-based detection (yellow = low nitrogen, black spots = fungal risk).</li>
          <li>Traffic-light alerts: ✅ Healthy | ⚠️ At Risk | ❌ Problem.</li>
        </ul>

        <h3>🎮 Gamification Layer (Engagement Booster)</h3>
        <p><strong>Badges:</strong></p>
        <ul>
          <li>“Hydration Master” → watered on time 7 days straight.</li>
          <li>“Growth Hacker” → plant grew 10cm in a month.</li>
        </ul>
        <p><strong>Levels & XP:</strong></p>
        <ul>
          <li>Each logged action (watering, tip checked, growth update) = XP.</li>
          <li>Plants + users level up.</li>
        </ul>
        <p><strong>Visual Plant Avatars:</strong></p>
        <ul>
          <li>Happy / sad / thriving plant icons based on care.</li>
          <li>Feels alive → emotional attachment → motivation.</li>
        </ul>

        <h2>4️⃣ Tech Stack (Hackathon-Ready)</h2>
        <ul>
          <li><strong>Frontend:</strong> React + Tailwind (fast, beautiful UI)</li>
          <li><strong>Backend:</strong> Node.js + Express</li>
          <li><strong>Database:</strong> MongoDB (store users, plants, care logs)</li>
          <li><strong>AI / APIs:</strong>
            <ul>
              <li>Plant ID API (Plant.id) → for species recognition</li>
              <li>OpenWeather API → for dynamic care</li>
              <li>TensorFlow.js (optional bonus) → train a mini model for leaf disease detection</li>
            </ul>
          </li>
        </ul>

        <h2>5️⃣ User Flow (Step-by-Step)</h2>
        <ol>
          <li><strong>Sign up / login</strong> → Create profile.</li>
          <li><strong>Add Plant</strong> → Upload photo + name → AI auto-fills breed info.</li>
          <li><strong>Dashboard:</strong>
            <ul>
              <li>Shows watering schedule, tips, plant avatar mood.</li>
              <li>“Water Now” button → logs streak, gives XP.</li>
            </ul>
          </li>
          <li><strong>Reminders & Alerts:</strong>
            <ul>
              <li>Notification → “Don’t water today, rain incoming!”</li>
              <li>Alert → “Leaves look unhealthy, check fungal risk.”</li>
            </ul>
          </li>
          <li><strong>Gamification:</strong>
            <ul>
              <li>After watering: “+10 XP, Badge unlocked: Hydration Hero!”</li>
              <li>Growth chart updates → satisfying progress loop.</li>
            </ul>
          </li>
        </ol>

        <h2>6️⃣ Differentiator (Why Judges Will Love It)</h2>
        <ul>
          <li>Existing plant apps = boring reminders.</li>
          <li>Your app = <strong>intelligent + adaptive + fun</strong>.</li>
          <li>Gamification → keeps users engaged (plants don’t get abandoned).</li>
          <li>Weather + AI → makes it feel futuristic + scalable.</li>
          <li>Can easily extend to <strong>IoT auto-watering system</strong> in future (bonus pitch).</li>
        </ul>

        <h2>7️⃣ Pitch Line</h2>
        <blockquote>
          “Smart Farm AI isn’t just a plant care reminder — it’s your personal digital farmer. It learns your plants, adapts to weather, and keeps you motivated with a fun, gamified experience. Caring for plants becomes as engaging as leveling up in a game.”
        </blockquote>

        <p><strong>⚡This is your complete package: Problem → Solution → Features → Flow → Tech → Differentiator → Pitch.
        It’s scoped perfectly for hackathon MVP but has wow factor (AI + gamification).</strong></p>

        <p>Do you want me to now <strong>design a simple wireframe (screen flow)</strong> so you can visualize exactly how the website should look for demo?</p>
      </div>
    </div>
  );
};

export default Overview;


