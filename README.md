# Create Urgency from Gaps - ARS Training Game

An interactive training game designed to help sales professionals create urgency by articulating business risk and impact when discussing Agentic Runtime Security gaps.

## 🎯 Purpose

This game reinforces key sales behaviors from the "Master the Message" workshop:
- Identify security gaps quickly
- Articulate why gaps matter to customers
- Connect gaps to business consequences
- Create urgency in customer conversations

## 🎮 Game Features

- **4 Proof-of-Concept Scenarios** covering all 4 critical gaps:
  - Accountability
  - Over-Privilege
  - Delegation / Impersonation
  - Last Mile Access

- **Immediate Feedback** with detailed explanations
- **Performance Tracking** with scoring and progress indicators
- **Learning Points** highlighting what makes strong impact statements
- **Performance Levels** from Needs Practice to Mastery

## 🚀 Quick Start

### Option 1: Open Locally

1. Download all files to a folder
2. Open `index.html` in your web browser
3. Start training!

### Option 2: Deploy to GitHub Pages

1. **Create a new repository** on GitHub
   - Go to https://github.com/new
   - Name it `create-urgency-from-gaps` (or any name you prefer)
   - Make it public
   - Don't initialize with README (we have one)

2. **Upload files to repository**
   ```bash
   # In your terminal, navigate to the project folder
   cd /path/to/create-urgency-from-gaps
   
   # Initialize git (if not already done)
   git init
   
   # Add all files
   git add .
   
   # Commit
   git commit -m "Initial commit: Why It Matters Builder game"
   
   # Add your GitHub repository as remote
   git remote add origin https://github.com/YOUR-USERNAME/create-urgency-from-gaps.git
   
   # Push to GitHub
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click **Settings** tab
   - Scroll down to **Pages** section (left sidebar)
   - Under "Source", select **main** branch
   - Click **Save**
   - Wait 1-2 minutes for deployment

4. **Access your game**
   - Your game will be available at:
   - `https://YOUR-USERNAME.github.io/create-urgency-from-gaps/`

## 📁 Project Structure

```
create-urgency-from-gaps/
├── index.html          # Main game page
├── styles.css          # All styling
├── game.js            # Game logic and state management
├── scenarios.js       # Scenario data (4 scenarios - proof of concept)
├── README.md          # This file
└── why_it_matters_game_plan.md  # Detailed implementation plan
```

## 🎓 How to Use

### For Learners

1. **Start the game** - Click "Start Training"
2. **Read each scenario** - Understand the customer's situation and the identified gap
3. **Choose your answer** - Select the response that best creates urgency
4. **Review feedback** - Learn what makes strong impact statements
5. **Complete all 4 scenarios** - Aim for 75%+ to reach Proficient level
6. **Apply your learning** - Use these skills in real customer conversations

### For Facilitators

1. **Share the URL** with your team
2. **Set expectations** - 5-10 minutes to complete (proof of concept)
3. **Encourage retakes** - Repetition builds mastery
4. **Discuss results** - Use as a conversation starter in team meetings
5. **Track progress** - Ask team members to share their performance levels

## 📊 Scoring System

- **3 points** - Excellent answer (clear risk + impact + consequence)
- **1 point** - Acceptable answer (identifies risk but weak impact)
- **0 points** - Poor answer (vague or no business impact)

### Performance Levels

- **Mastery** (90%+): Ready for customer conversations
- **Proficient** (75-89%): Strong understanding, minor refinement needed
- **Developing** (60-74%): On the right track, needs more practice
- **Needs Practice** (<60%): Review materials and retake

## 🔧 Customization

### Adding New Scenarios

Edit `scenarios.js` and add new scenario objects following this structure:

```javascript
{
  id: 13,
  gap: "Accountability",
  scenario: "Your customer scenario here...",
  question: "Why does this matter to the customer?",
  options: [
    {
      text: "Option A text",
      score: 0,
      feedback: "Explanation of why this answer is weak"
    },
    {
      text: "Option B text",
      score: 1,
      feedback: "Explanation of why this is acceptable"
    },
    {
      text: "Option C text",
      score: 3,
      feedback: "Explanation of why this is excellent"
    }
  ],
  correctIndex: 2,
  imperative: "Register Agents",
  learningPoints: [
    "Key element 1",
    "Key element 2",
    "Key element 3"
  ]
}
```

### Modifying Styling

Edit `styles.css` to change:
- Colors (see CSS variables at the top)
- Fonts
- Spacing
- Layout

### Changing Game Logic

Edit `game.js` to modify:
- Scoring calculations
- Performance level thresholds
- Screen transitions
- Feedback display

## 🌐 Browser Compatibility

Works on all modern browsers:
- Chrome/Edge (recommended)
- Firefox
- Safari
- Mobile browsers (responsive design)

## 📱 Mobile Support

The game is fully responsive and works on:
- Smartphones
- Tablets
- Desktop computers

## 🔒 Privacy

- No data is collected or stored
- No cookies or tracking
- All processing happens in the browser
- No server-side components

## 🛠️ Technical Details

- **Pure HTML/CSS/JavaScript** - No frameworks or dependencies
- **Single Page Application** - No page reloads
- **Client-side only** - No backend required
- **Lightweight** - Fast loading and performance

## 📈 Future Enhancements

Potential additions for future versions:
- [ ] Free-text response mode with AI evaluation
- [ ] Progress persistence (localStorage)
- [ ] Scenario randomization
- [ ] Leaderboard functionality
- [ ] Certificate generation
- [ ] Analytics dashboard
- [ ] More scenarios (expand to 20+)
- [ ] Timed challenges
- [ ] Team competitions

## 🤝 Contributing

To contribute new scenarios or improvements:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This training game is designed for internal use in sales enablement programs.

## 💡 Tips for Success

### For Sales Reps
- Take your time reading each scenario
- Think about the customer's perspective
- Focus on business impact, not technical details
- Use concrete, specific language
- Create urgency without fear-mongering

### For Managers
- Use as part of onboarding for new reps
- Incorporate into regular training sessions
- Encourage team discussions about scenarios
- Share best practices from high performers
- Track improvement over time

## 🎯 Learning Objectives

By completing this game, participants will be able to:
- ✅ Quickly identify the 4 critical security gaps
- ✅ Articulate specific business consequences
- ✅ Use customer-friendly language
- ✅ Create urgency through impact statements
- ✅ Map gaps to the 5 imperatives
- ✅ Conduct confident customer conversations

## 📞 Support

For questions or issues:
- Review the game plan document: `why_it_matters_game_plan.md`
- Check the ARS Workshop materials
- Contact your training coordinator

## 🎉 Acknowledgments

Based on the "Agentic Runtime Security - Master the Message Workshop" content and the "Why It Matters Builder" game concept from the sales reinforcement games framework.

---

**Ready to master the message?** [Start Training →](index.html)