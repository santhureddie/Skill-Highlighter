# 🔍 Skill Highlighter – Chrome Extension
Skill Highlighter is a Chrome extension designed to streamline your job application process by automatically highlighting relevant skills within job descriptions. This tool assists job seekers in quickly identifying key skills, ensuring that their resumes and applications align with employer expectations.
## 🚀 Features
- **Automatic Skill Highlighting:** Detects and highlights predefined skills within job descriptions on web pages.
- **Customizable Skill Set:** Easily modify the list of skills to match your expertise or target job roles.
- **Seamless Integration:** Operates in the background, enhancing your browsing experience without interruptions
## 🛠️ Technologies Used
- JavaScript
- CSS
- DOM API
- MutationObserver
## 📁 Project Structure
```

Skill-Highlighter/
├── content.js        # Main script that interacts with web pages
├── skills.js         # Contains the list of skills to highlight
├── style.css         # Styling for highlighted elements
├── manifest.json     # Extension configuration file
└── README.md         # Project documentation
```
## ⚙️ Installation
### Clone the Repository:
```
git clone https://github.com/santhureddie/Skill-Highlighter.git
cd Skill-Highlighter
```
### Load the Extension in Chrome:
- Open Chrome and navigate to chrome://extensions/
- Enable Developer mode (toggle switch in the top right corner)
- Click on Load unpacked
- Select the Skill-Highlighter directory from your local machine.

### Usage:
- Navigate to a job listing or description page.
- The extension will automatically highlight the predefined skills within the text.
## 🧩 Customization
To tailor the extension to your specific skill set:

### Modify skills.js:
- Open the skills.js file.
- Edit the array to include the skills you want to highlight.
- Example:
```
  const skills = ['JavaScript', 'React', 'Node.js', 'CSS'];
```
### Save Changes:
- After editing, save the file.
- The extension will use the updated skill list upon the next page load.

## 📄 License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT)

## 👨‍💻 Author
 Santhosh Kumar Reddy Jampana
 
 [GitHub Profile](https://github.com/santhureddie)
