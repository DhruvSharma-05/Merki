import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Check, Plus, X, Sparkles } from 'lucide-react';
import { Button } from './Button';

interface Task {
  id: string;
  title: string;
  tag: string;
  color: string;
  completed: boolean;
  createdAt: number;
}

const sampleTasks = [
  { title: "Review Q4 Marketing Plan", tag: "Marketing", color: "text-rose-600 bg-rose-50 dark:bg-rose-900/20 dark:text-rose-300" },
  { title: "Update design system components", tag: "Design", color: "text-indigo-600 bg-indigo-50 dark:bg-indigo-900/20 dark:text-indigo-300" },
  { title: "Client meeting preparation", tag: "Sales", color: "text-amber-600 bg-amber-50 dark:bg-amber-900/20 dark:text-amber-300" },
  { title: "Plan team offsite", tag: "Marketing", color: "text-rose-600 bg-rose-50 dark:bg-rose-900/20 dark:text-rose-300" },
  { title: "Code review PR #42", tag: "Design", color: "text-indigo-600 bg-indigo-50 dark:bg-indigo-900/20 dark:text-indigo-300" },
  { title: "Prepare sales presentation", tag: "Sales", color: "text-amber-600 bg-amber-50 dark:bg-amber-900/20 dark:text-amber-300" },
];

export const Hero: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem('merki-demo-tasks');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return [];
      }
    }
    return [
      { id: '1', title: "Review Q4 Marketing Plan", tag: "Marketing", color: "text-rose-600 bg-rose-50 dark:bg-rose-900/20 dark:text-rose-300", completed: false, createdAt: Date.now() },
      { id: '2', title: "Update design system components", tag: "Design", color: "text-indigo-600 bg-indigo-50 dark:bg-indigo-900/20 dark:text-indigo-300", completed: false, createdAt: Date.now() },
      { id: '3', title: "Client meeting preparation", tag: "Sales", color: "text-amber-600 bg-amber-50 dark:bg-amber-900/20 dark:text-amber-300", completed: false, createdAt: Date.now() },
      { id: '4', title: "Weekly sync with team", tag: "General", color: "text-slate-400 bg-slate-200 dark:bg-slate-800", completed: true, createdAt: Date.now() },
    ];
  });

  const [showAddTask, setShowAddTask] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskTag, setNewTaskTag] = useState('Design');
  const [celebrating, setCelebrating] = useState<string | null>(null);
  const [newTaskId, setNewTaskId] = useState<string | null>(null);
  const [dashboardHighlighted, setDashboardHighlighted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const taskListRef = useRef<HTMLDivElement>(null);
  const dashboardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    localStorage.setItem('merki-demo-tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setShowAddTask(true);
      }
      if (e.key === 'Escape' && showAddTask) {
        setShowAddTask(false);
        setNewTaskTitle('');
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [showAddTask]);

  useEffect(() => {
    if (showAddTask && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [showAddTask]);

  const toggleTask = (id: string) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        const newCompleted = !task.completed;
        if (newCompleted) {
          setCelebrating(id);
          setTimeout(() => setCelebrating(null), 2000);
        }
        return { ...task, completed: newCompleted };
      }
      return task;
    }));
  };

  const addTask = () => {
    if (newTaskTitle.trim()) {
      const tagColors: Record<string, string> = {
        'Design': 'text-indigo-600 bg-indigo-50 dark:bg-indigo-900/20 dark:text-indigo-300',
        'Sales': 'text-amber-600 bg-amber-50 dark:bg-amber-900/20 dark:text-amber-300',
        'Marketing': 'text-rose-600 bg-rose-50 dark:bg-rose-900/20 dark:text-rose-300',
        'General': 'text-slate-400 bg-slate-200 dark:bg-slate-800',
      };
      
      const newTask: Task = {
        id: Date.now().toString(),
        title: newTaskTitle,
        tag: newTaskTag,
        color: tagColors[newTaskTag] || tagColors['General'],
        completed: false,
        createdAt: Date.now(),
      };
      
      setNewTaskId(newTask.id);
      setTasks([newTask, ...tasks.filter(t => !t.completed)]);
      setNewTaskTitle('');
      setShowAddTask(false);
      
      setTimeout(() => {
        setNewTaskId(null);
        if (taskListRef.current) {
          taskListRef.current.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 500);
    }
  };

  const deleteTask = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setTasks(tasks.filter(task => task.id !== id));
  };

  const addRandomTask = () => {
    const randomTask = sampleTasks[Math.floor(Math.random() * sampleTasks.length)];
    const tagColors: Record<string, string> = {
      'Design': 'text-indigo-600 bg-indigo-50 dark:bg-indigo-900/20 dark:text-indigo-300',
      'Sales': 'text-amber-600 bg-amber-50 dark:bg-amber-900/20 dark:text-amber-300',
      'Marketing': 'text-rose-600 bg-rose-50 dark:bg-rose-900/20 dark:text-rose-300',
      'General': 'text-slate-400 bg-slate-200 dark:bg-slate-800',
    };
    
    const newTask: Task = {
      id: Date.now().toString(),
      title: randomTask.title,
      tag: randomTask.tag,
      color: tagColors[randomTask.tag] || tagColors['General'],
      completed: false,
      createdAt: Date.now(),
    };
    
    setNewTaskId(newTask.id);
    setTasks([newTask, ...tasks.filter(t => !t.completed)]);
    
    setTimeout(() => {
      setNewTaskId(null);
      if (taskListRef.current) {
        taskListRef.current.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 500);
  };

  const activeTasks = tasks.filter(t => !t.completed);
  const completedTasks = tasks.filter(t => t.completed);
  const completionRate = tasks.length > 0 ? Math.round((completedTasks.length / tasks.length) * 100) : 0;

  const scrollToDashboard = () => {
    if (dashboardRef.current) {
      dashboardRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setDashboardHighlighted(true);
      setTimeout(() => setDashboardHighlighted(false), 2000);
    }
  };
  return (
    <section id="home" className="relative pt-20 pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto animate-fade-in">
          
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 text-xs font-medium mb-8 border border-indigo-100 dark:border-indigo-500/20 hover:border-indigo-200 dark:hover:border-indigo-500/40 transition-all duration-300 cursor-default hover:scale-105 hover:shadow-sm hover:bg-indigo-100 dark:hover:bg-indigo-500/20">
            <span className="flex h-1.5 w-1.5 rounded-full bg-indigo-500 mr-2 animate-pulse"></span>
            Merki is now live
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-8 leading-[1.1]">
            Focus on work, <br />
            <span className="text-indigo-600 dark:text-indigo-400 inline-block hover:scale-105 transition-transform duration-300 cursor-default">not the chaos.</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mb-10 leading-relaxed font-light">
            The minimalistic productivity tool designed for modern teams. 
            Streamline your workflow with intelligent automation and focus on what truly matters.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button variant="primary" className="flex items-center justify-center gap-2 px-8 py-3 group/btn">
              Get Started <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button variant="secondary" className="px-8 py-3" onClick={scrollToDashboard}>
              Live Demo
            </Button>
          </div>

          {/* Minimalist Dashboard Preview - CSS Mockup */}
          <div ref={dashboardRef} className="mt-20 relative w-full max-w-5xl mx-auto px-2 sm:px-0 group/dashboard">
            
            <div className={`relative rounded-xl overflow-hidden shadow-2xl dark:shadow-indigo-500/10 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col aspect-[4/3] sm:aspect-[16/9] md:aspect-[16/10] hover:shadow-3xl hover:border-indigo-300/50 dark:hover:border-indigo-700/50 transition-all duration-500 ${
              dashboardHighlighted ? 'ring-4 ring-indigo-500/50 shadow-indigo-500/20 scale-[1.02]' : ''
            }`}>
              
              {/* Browser Header */}
              <div className="h-9 bg-slate-50 dark:bg-slate-900/50 border-b border-slate-100 dark:border-slate-800 flex items-center px-4 gap-2 flex-shrink-0">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-400/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80"></div>
              </div>

              {/* App Interface */}
              <div className="flex flex-1 overflow-hidden">
                
                {/* Sidebar (Hidden on mobile) */}
                <div className="hidden sm:flex w-64 flex-col border-r border-slate-100 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-900/30 p-4">
                   {/* User Profile */}
                   <div className="flex items-center gap-3 mb-8 px-2">
                      <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-xs">M</div>
                      <div className="text-sm font-medium text-slate-700 dark:text-slate-200">Merki Workspace</div>
                   </div>
                   
                   {/* Nav Items */}
                   <div className="space-y-1">
                      <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                          <div className="w-4 h-4"><Check className="w-4 h-4" /></div>
                          <span className="text-sm font-medium">My Tasks</span>
                          <span className="ml-auto text-xs bg-indigo-200 dark:bg-indigo-500/30 px-1.5 py-0.5 rounded text-indigo-700 dark:text-indigo-200 transition-all duration-300">{activeTasks.length}</span>
                      </div>
                      {['Inbox', 'Projects', 'Goals'].map((item) => (
                        <div key={item} className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50 cursor-default transition-all duration-200 hover:translate-x-1 hover:shadow-sm">
                            <div className="w-4 h-4 rounded-sm border-2 border-slate-300 dark:border-slate-600 transition-colors group-hover/dashboard:border-indigo-400"></div>
                            <span className="text-sm font-medium">{item}</span>
                        </div>
                      ))}
                   </div>

                   {/* Bottom Section */}
                   <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
                      <div className="flex items-center gap-3 px-3 text-slate-500 dark:text-slate-500">
                         <div className="w-4 h-4 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                         <span className="text-sm">Team Settings</span>
                      </div>
                   </div>
                </div>

                {/* Main View */}
                <div className="flex-1 bg-white dark:bg-slate-950 flex flex-col min-w-0">
                  
                  {/* Top Bar */}
                  <div className="h-16 border-b border-slate-50 dark:border-slate-900 flex items-center justify-between px-8 flex-shrink-0">
                     <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Today</h2>
                          {tasks.length > 0 && (
                            <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/20 px-2 py-0.5 rounded-full transition-all duration-300">
                              {completionRate}% complete
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-3">
                          <p className="text-xs text-slate-500 dark:text-slate-400">
                            {activeTasks.length} active {activeTasks.length === 1 ? 'task' : 'tasks'}
                          </p>
                          {tasks.length > 0 && (
                            <div className="hidden sm:flex h-1.5 flex-1 max-w-32 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500 ease-out"
                                style={{ width: `${completionRate}%` }}
                              ></div>
                            </div>
                          )}
                        </div>
                     </div>
                     <div className="flex items-center gap-4">
                        <div className="hidden md:flex -space-x-2">
                          {[1,2,3].map(i => (
                            <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-950 bg-slate-200 dark:bg-slate-800 hover:scale-110 transition-transform duration-200 cursor-default"></div>
                          ))}
                        </div>
                        <button
                          onClick={() => setShowAddTask(!showAddTask)}
                          className="w-8 h-8 rounded-lg border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:border-indigo-300 dark:hover:border-indigo-700 hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer transition-all duration-200 hover:scale-110 hover:rotate-90 relative group/btn"
                          title="Add new task (Ctrl/Cmd + K)"
                        >
                           <Plus className={`w-4 h-4 transition-transform duration-200 ${showAddTask ? 'rotate-45' : ''}`} />
                           <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[9px] text-slate-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                             Ctrl+K
                           </span>
                        </button>
                     </div>
                  </div>

                  {/* Task List */}
                  <div className="flex-1 p-8 overflow-y-auto relative" ref={taskListRef}>
                    {/* Add Task Form */}
                    {showAddTask && (
                      <div className="mb-4 p-4 rounded-xl border-2 border-dashed border-indigo-300 dark:border-indigo-700 bg-indigo-50/50 dark:bg-indigo-900/10 animate-fade-in shadow-lg backdrop-blur-sm">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-sm font-semibold text-indigo-900 dark:text-indigo-100">New Task</h3>
                          <button
                            onClick={() => {
                              setShowAddTask(false);
                              setNewTaskTitle('');
                            }}
                            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors hover:scale-110"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                        <input
                          ref={inputRef}
                          type="text"
                          value={newTaskTitle}
                          onChange={(e) => setNewTaskTitle(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && addTask()}
                          placeholder="What needs to be done?"
                          className="w-full mb-3 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                        />
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xs text-slate-600 dark:text-slate-400">Tag:</span>
                          {['Design', 'Sales', 'Marketing', 'General'].map(tag => (
                            <button
                              key={tag}
                              onClick={() => setNewTaskTag(tag)}
                              className={`px-2 py-1 rounded text-[10px] font-bold uppercase transition-all duration-200 ${
                                newTaskTag === tag
                                  ? 'bg-indigo-500 text-white scale-110 shadow-md'
                                  : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400 hover:scale-105'
                              }`}
                            >
                              {tag}
                            </button>
                          ))}
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={addTask}
                            className="flex-1 px-3 py-1.5 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-all duration-200 hover:scale-105 active:scale-95"
                          >
                            Add Task
                          </button>
                          <button
                            onClick={() => {
                              setShowAddTask(false);
                              setNewTaskTitle('');
                            }}
                            className="px-3 py-1.5 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium hover:bg-slate-300 dark:hover:bg-slate-600 transition-all duration-200 hover:scale-105 active:scale-95"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    )}

                    <div className="space-y-3">
                       {/* Active Tasks */}
                       {activeTasks.map((task) => (
                          <div 
                            key={task.id}
                            onClick={() => toggleTask(task.id)}
                            className={`group flex items-center gap-4 p-4 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-indigo-600/30 dark:hover:border-indigo-500/30 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md hover:shadow-indigo-500/10 transition-all duration-300 cursor-pointer hover:-translate-y-0.5 ${
                              newTaskId === task.id ? 'animate-slide-in' : ''
                            } ${
                              celebrating === task.id ? 'ring-2 ring-indigo-500/50 animate-pulse' : ''
                            }`}
                          >
                             <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                               task.completed
                                 ? 'bg-indigo-500 border-indigo-500 scale-110'
                                 : 'border-slate-300 dark:border-slate-600 group-hover:border-indigo-500 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/20 group-hover:scale-110'
                             }`}>
                               {task.completed && <Check className="w-3 h-3 text-white" />}
                             </div>
                             <span className={`flex-1 text-sm font-medium truncate transition-all duration-200 ${
                               task.completed
                                 ? 'text-slate-500 line-through'
                                 : 'text-slate-700 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400'
                             }`}>{task.title}</span>
                             <span className={`hidden sm:inline-block px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${task.color} group-hover:scale-105 transition-transform duration-200`}>{task.tag}</span>
                             {celebrating === task.id && (
                               <Sparkles className="w-4 h-4 text-indigo-500 animate-bounce" />
                             )}
                             <button
                               onClick={(e) => deleteTask(task.id, e)}
                               className="opacity-0 group-hover:opacity-100 p-1 hover:bg-rose-100 dark:hover:bg-rose-900/20 rounded transition-all duration-200 hover:scale-110 active:scale-95"
                             >
                               <X className="w-4 h-4 text-rose-500" />
                             </button>
                          </div>
                       ))}

                       {/* Completed Tasks */}
                       {completedTasks.length > 0 && (
                         <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800">
                           <p className="text-xs text-slate-400 dark:text-slate-500 mb-3 uppercase tracking-wider">Completed ({completedTasks.length})</p>
                           {completedTasks.map((task) => (
                             <div 
                               key={task.id}
                               onClick={() => toggleTask(task.id)}
                               className="group flex items-center gap-4 p-4 rounded-xl border border-transparent bg-slate-50 dark:bg-slate-900/50 opacity-60 hover:opacity-100 cursor-pointer transition-all duration-300 mb-3 hover:bg-slate-100 dark:hover:bg-slate-800/50"
                             >
                                <div className="w-5 h-5 rounded-full bg-indigo-500 flex items-center justify-center text-white transition-transform duration-200 group-hover:scale-110">
                                   <Check className="w-3 h-3" />
                                </div>
                                <span className="flex-1 text-sm font-medium text-slate-500 line-through truncate">{task.title}</span>
                                <span className={`hidden sm:inline-block px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-200 dark:bg-slate-800`}>{task.tag}</span>
                                <button
                                  onClick={(e) => deleteTask(task.id, e)}
                                  className="opacity-0 group-hover:opacity-100 p-1 hover:bg-rose-100 dark:hover:bg-rose-900/20 rounded transition-all duration-200 hover:scale-110 active:scale-95"
                                >
                                  <X className="w-4 h-4 text-rose-500" />
                                </button>
                             </div>
                           ))}
                         </div>
                       )}

                       {activeTasks.length === 0 && !showAddTask && completedTasks.length > 0 && (
                         <div className="text-center py-12 animate-fade-in">
                           <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/50 animate-pulse">
                             <Check className="w-8 h-8 text-white" />
                           </div>
                           <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">All tasks completed! 🎉</p>
                           <p className="text-slate-400 dark:text-slate-500 text-xs mt-1">You're doing great!</p>
                           <button
                             onClick={() => setShowAddTask(true)}
                             className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-all duration-200 hover:scale-105 active:scale-95"
                           >
                             Add a new task
                           </button>
                         </div>
                       )}
                       
                       {tasks.length === 0 && (
                         <div className="text-center py-12 animate-fade-in">
                           <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                             <Plus className="w-8 h-8 text-slate-400" />
                           </div>
                           <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">No tasks yet</p>
                           <p className="text-slate-400 dark:text-slate-500 text-xs mt-1">Get started by adding your first task</p>
                           <button
                             onClick={() => setShowAddTask(true)}
                             className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-all duration-200 hover:scale-105 active:scale-95"
                           >
                             Create your first task
                           </button>
                         </div>
                       )}
                    </div>

                    {/* Gradient Fade */}
                    <div className="sticky bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-slate-950 to-transparent pointer-events-none -mb-4"></div>
                  </div>

                  {/* Floating Action Button */}
                  <div className="absolute bottom-8 right-8">
                     <button
                       onClick={addRandomTask}
                       className="h-12 w-12 bg-indigo-600 rounded-full shadow-lg shadow-indigo-500/40 flex items-center justify-center text-white hover:scale-110 hover:shadow-xl hover:shadow-indigo-500/60 hover:rotate-90 transition-all duration-300 cursor-pointer active:scale-95 group/fab"
                       title="Add random task"
                     >
                        <Plus className="h-6 w-6 group-hover/fab:rotate-90 transition-transform duration-300" />
                     </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements behind */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-indigo-400/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
