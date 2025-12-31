// Data handler for KeshavSoft dashboard
// Loads and manages data from data.json

class DataHandler {
  constructor() {
    this.data = null;
    this.loadData();
  }

  async loadData() {
    try {
      // In a real implementation, we would fetch the data from the JSON file
      // For now, we'll simulate loading the data by creating it in the window object
      // since Vite/Nunjucks will handle the actual data injection
      
      // This is a placeholder - the actual data will be loaded via Nunjucks in the HTML
      console.log("Data handler initialized");
    } catch (error) {
      console.error('Error loading data:', error);
    }
  }

  // Function to render dashboard stats
  renderDashboardStats() {
    // This will be populated by data from the JSON file via Nunjucks
    // For now, we'll create a placeholder that would be replaced by actual data
    if (window.dashboardData && window.dashboardData.dashboard && window.dashboardData.dashboard.stats) {
      const stats = window.dashboardData.dashboard.stats;
      const statsContainer = document.getElementById('dashboard-stats');
      
      if (statsContainer) {
        statsContainer.innerHTML = '';
        
        stats.forEach(stat => {
          const statElement = document.createElement('div');
          statElement.className = 'col-xl-3 col-md-6 col-lg-6 col-12';
          statElement.innerHTML = `
            <div class="card">
              <div class="card-content">
                <div class="card-body">
                  <div class="media d-flex">
                    <div class="media-body text-left">
                      <h3 class="text-bold-700">${stat.value}</h3>
                      <span>${stat.title}</span>
                    </div>
                    <div>
                      <i class="bi ${stat.icon} ${stat.color === 'olive' ? 'text-success' : 'text-warning'} font-2x float-right"></i>
                    </div>
                  </div>
                  <div class="progress progress-sm mt-1 mb-0 box-shadow-2">
                    <div class="progress-bar ${stat.color === 'olive' ? 'bg-success' : 'bg-warning'}" role="progressbar" 
                         style="width: ${Math.min(100, Math.abs(parseFloat(stat.change)))}%" 
                         aria-valuenow="${Math.min(100, Math.abs(parseFloat(stat.change)))}" 
                         aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
            </div>
          `;
          statsContainer.appendChild(statElement);
        });
      }
    }
  }

  // Function to render recent activity
  renderRecentActivity() {
    if (window.dashboardData && window.dashboardData.recentActivity) {
      const activities = window.dashboardData.recentActivity;
      const activityContainer = document.getElementById('recent-activity');
      
      if (activityContainer) {
        activityContainer.innerHTML = '';
        
        activities.forEach(activity => {
          const activityElement = document.createElement('div');
          activityElement.className = 'timeline-item pb-3';
          activityElement.innerHTML = `
            <div class="timeline-info">
              <span class="text-${activity.type === 'olive' ? 'success' : 'warning'}">${activity.time}</span>
            </div>
            <div class="timeline-marker ${activity.type === 'olive' ? 'bg-success' : 'bg-warning'}"></div>
            <div class="timeline-content">
              <h6 class="text-uppercase">${activity.user}</h6>
              <p>${activity.action} <span class="text-${activity.type === 'olive' ? 'success' : 'warning'}">${activity.target}</span></p>
            </div>
          `;
          activityContainer.appendChild(activityElement);
        });
      }
    }
  }

  // Function to render projects
  renderProjects() {
    if (window.dashboardData && window.dashboardData.projects) {
      const projects = window.dashboardData.projects;
      const projectsContainer = document.getElementById('projects-list');
      
      if (projectsContainer) {
        projectsContainer.innerHTML = '';
        
        projects.forEach(project => {
          const projectElement = document.createElement('tr');
          projectElement.innerHTML = `
            <td>${project.name}</td>
            <td>
              <div class="progress progress-sm">
                <div class="progress-bar ${project.color === 'olive' ? 'bg-success' : 'bg-warning'}" 
                     role="progressbar" 
                     style="width: ${project.progress}%" 
                     aria-valuenow="${project.progress}" 
                     aria-valuemin="0" 
                     aria-valuemax="100"></div>
              </div>
            </td>
            <td><span class="badge bg-${project.color === 'olive' ? 'success' : 'warning'}">${project.status}</span></td>
            <td>${project.deadline}</td>
          `;
          projectsContainer.appendChild(projectElement);
        });
      }
    }
  }

  // Function to render users
  renderUsers() {
    if (window.dashboardData && window.dashboardData.users) {
      const users = window.dashboardData.users;
      const usersContainer = document.getElementById('users-list');
      
      if (usersContainer) {
        usersContainer.innerHTML = '';
        
        users.forEach(user => {
          const userElement = document.createElement('tr');
          userElement.innerHTML = `
            <td class="text-${user.color === 'olive' ? 'success' : 'warning'}">${user.name}</td>
            <td>${user.email}</td>
            <td><span class="badge bg-light-secondary">${user.role}</span></td>
            <td><span class="badge bg-${user.status === 'Active' ? (user.color === 'olive' ? 'success' : 'warning') : 'secondary'}">${user.status}</span></td>
            <td>${user.lastLogin}</td>
          `;
          usersContainer.appendChild(userElement);
        });
      }
    }
  }
}

// Initialize the data handler when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  const dataHandler = new DataHandler();
  
  // Render all components if they exist on the page
  dataHandler.renderDashboardStats();
  dataHandler.renderRecentActivity();
  dataHandler.renderProjects();
  dataHandler.renderUsers();
});

// Export for use in other modules (if needed)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = DataHandler;
}