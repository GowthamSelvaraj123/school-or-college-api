 <h1>📚 School/College Management API</h1>

  <div class="section">
    <h2>📘 Project Description</h2>
    <p>
      A full-featured RESTful API for managing school or college data such as students, teachers, courses, classes, subjects, and user authentication.
    </p>
  </div>

  <div class="section">
    <h2>⚙️ Technologies Used</h2>
    <ul>
      <li>Node.js + Express.js</li>
      <li>MongoDB + Mongoose</li>
      <li>JWT for Authentication</li>
      <li>Bcrypt for password encryption</li>
      <li>Postman (for testing)</li>
    </ul>
  </div>

  <div class="section">
    <h2>📦 Installation</h2>
    <pre><code>
git clone your-repo-url
cd project-folder
npm install
npm run dev
    </code></pre>
    <p>Ensure MongoDB is running locally or update the Mongo URI in <code>config/db.js</code>.</p>
  </div>

  <div class="section">
    <h2>🛣️ API Routes</h2>

    <h3>🔐 Auth Routes</h3>
    <ul>
      <li>POST <code>/api/auth/register</code> - Register new user</li>
      <li>POST <code>/api/auth/login</code> - Login and get JWT</li>
      <li>POST <code>/api/auth/logout</code> - Logout</li>
      <li>POST <code>/api/auth/forgot-password</code> - Send reset link</li>
      <li>POST <code>/api/auth/reset-password/:userId</code> - Reset password</li>
    </ul>

    <h3>👥 User Routes</h3>
    <ul>
      <li>GET <code>/api/users</code> - Get all users</li>
      <li>POST <code>/api/users</code> - Create user</li>
    </ul>

    <h3>🎓 Student Routes</h3>
    <ul>
      <li>GET <code>/api/students</code></li>
      <li>GET <code>/api/students/:id</code></li>
      <li>POST <code>/api/students</code></li>
      <li>PUT <code>/api/students/:id</code></li>
      <li>DELETE <code>/api/students/:id</code></li>
    </ul>

    <h3>👨‍🏫 Teacher Routes</h3>
    <ul>
      <li>GET <code>/api/teachers</code></li>
      <li>GET <code>/api/teachers/:id</code></li>
      <li>POST <code>/api/teachers</code></li>
      <li>PUT <code>/api/teachers/:id</code></li>
      <li>DELETE <code>/api/teachers/:id</code></li>
    </ul>

    <h3>🏫 Class Routes</h3>
    <ul>
      <li>GET <code>/api/classes</code></li>
      <li>GET <code>/api/classes/:id</code></li>
      <li>POST <code>/api/classes</code></li>
      <li>PUT <code>/api/classes/:id</code></li>
      <li>DELETE <code>/api/classes/:id</code></li>
    </ul>

    <h3>📘 Course Routes</h3>
    <ul>
      <li>GET <code>/api/courses</code></li>
      <li>GET <code>/api/courses/:id</code></li>
      <li>POST <code>/api/courses</code></li>
      <li>PUT <code>/api/courses/:id</code></li>
      <li>DELETE <code>/api/courses/:id</code></li>
    </ul>

    <h3>📚 Subject Routes</h3>
    <ul>
      <li>GET <code>/api/subjects</code></li>
      <li>GET <code>/api/subjects/:id</code></li>
      <li>POST <code>/api/subjects</code></li>
      <li>PUT <code>/api/subjects/:id</code></li>
      <li>DELETE <code>/api/subjects/:id</code></li>
    </ul>
  </div>

  <div class="section">
    <h2>🔑 Environment Variables</h2>
    <p>Create a <code>.env</code> file (or use <code>config/db.js</code> directly) and set your MongoDB URI:</p>
    <pre><code>
MONGO_URI=mongodb://localhost:27017/school-db
JWT_SECRET=your_jwt_secret_key
    </code></pre>
  </div>

  <div class="section">
    <h2>🧪 Testing</h2>
    <p>You can test the endpoints using <strong>Postman</strong> or any REST client.</p>
    <p>Make sure to set the JWT token in headers for protected routes:</p>
    <pre><code>
Authorization: Bearer &lt;your_token_here&gt;
    </code></pre>
  </div>

  <div class="section">
    <h2>🧑‍💻 Developer Notes</h2>
    <ul>
      <li>All passwords are encrypted using bcrypt.</li>
      <li>JWT token is required for protected routes (extend auth middleware).</li>
      <li>Controllers follow a consistent response format: <code>{ status, message, data }</code></li>
    </ul>
  </div>