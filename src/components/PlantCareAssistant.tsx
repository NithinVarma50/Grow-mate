import React, { useState, useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Calendar, 
  Camera, 
  ChevronDown, 
  ChevronRight, 
  Droplets, 
  Edit3, 
  Heart, 
  Home, 
  Leaf, 
  Moon, 
  Plus, 
  Search, 
  Settings, 
  Star, 
  Sun, 
  Trash2, 
  TrendingUp, 
  Upload, 
  User, 
  X,
  Award,
  Target,
  Zap,
  CheckCircle,
  AlertTriangle,
  Info
} from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

// Types
interface Plant {
  id: string
  name: string
  species: string
  wateringSchedule: string
  lastWatered?: string
  nextWatering?: string
  notes: string
  photos: string[]
  progress: number
  healthStatus: 'healthy' | 'warning' | 'critical'
  badges: string[]
  plantedDate: string
}

interface CareReminder {
  id: string
  plantId: string
  plantName: string
  type: 'watering' | 'fertilizing' | 'pruning' | 'repotting'
  dueDate: string
  completed: boolean
}

interface Achievement {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  unlocked: boolean
  progress?: number
  maxProgress?: number
}

interface User {
  name: string
  avatar: string
  level: number
  xp: number
  maxXp: number
  plantsOwned: number
  streak: number
}

// Mock Data
const mockPlants: Plant[] = [
  {
    id: '1',
    name: 'Sunny',
    species: 'Monstera Deliciosa',
    wateringSchedule: 'Every 7 days',
    lastWatered: '2024-01-15',
    nextWatering: '2024-01-22',
    notes: 'Loves bright indirect light. New leaf sprouting!',
    photos: [
      'https://images.unsplash.com/photo-1545239705-1564e58b9e4a?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop'
    ],
    progress: 75,
    healthStatus: 'healthy',
    badges: ['Fast Grower', 'Air Purifier'],
    plantedDate: '2023-10-01'
  },
  {
    id: '2',
    name: 'Spike',
    species: 'Snake Plant',
    wateringSchedule: 'Every 14 days',
    lastWatered: '2024-01-10',
    nextWatering: '2024-01-24',
    notes: 'Very low maintenance. Perfect for beginners.',
    photos: [
      'https://images.unsplash.com/photo-1509423350716-97f2360af2e4?w=400&h=400&fit=crop'
    ],
    progress: 60,
    healthStatus: 'healthy',
    badges: ['Low Maintenance', 'Beginner Friendly'],
    plantedDate: '2023-11-15'
  },
  {
    id: '3',
    name: 'Ruby',
    species: 'Fiddle Leaf Fig',
    wateringSchedule: 'Every 5 days',
    lastWatered: '2024-01-12',
    nextWatering: '2024-01-17',
    notes: 'Needs consistent watering. Watch for brown spots.',
    photos: [
      'https://images.unsplash.com/photo-1463154545680-d59320fd685d?w=400&h=400&fit=crop'
    ],
    progress: 45,
    healthStatus: 'warning',
    badges: ['Statement Plant'],
    plantedDate: '2023-12-01'
  }
]

const mockReminders: CareReminder[] = [
  {
    id: '1',
    plantId: '1',
    plantName: 'Sunny',
    type: 'watering',
    dueDate: '2024-01-22',
    completed: false
  },
  {
    id: '2',
    plantId: '3',
    plantName: 'Ruby',
    type: 'fertilizing',
    dueDate: '2024-01-20',
    completed: false
  },
  {
    id: '3',
    plantId: '2',
    plantName: 'Spike',
    type: 'pruning',
    dueDate: '2024-01-25',
    completed: true
  }
]

const mockAchievements: Achievement[] = [
  {
    id: '1',
    title: 'Plant Parent',
    description: 'Successfully care for your first plant for 30 days',
    icon: <Leaf className="w-6 h-6" />,
    unlocked: true
  },
  {
    id: '2',
    title: 'Green Thumb',
    description: 'Keep 5 plants healthy simultaneously',
    icon: <Star className="w-6 h-6" />,
    unlocked: false,
    progress: 3,
    maxProgress: 5
  },
  {
    id: '3',
    title: 'Consistency King',
    description: 'Maintain a 30-day watering streak',
    icon: <Target className="w-6 h-6" />,
    unlocked: false,
    progress: 15,
    maxProgress: 30
  }
]

const mockUser: User = {
  name: 'Alex Green',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&fit=crop&crop=face',
  level: 5,
  xp: 750,
  maxXp: 1000,
  plantsOwned: 3,
  streak: 15
}

// Custom Hooks
const useLocalStorage = <T,>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      return initialValue
    }
  })

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.error(error)
    }
  }

  return [storedValue, setValue] as const
}

// Components
const PlantCard: React.FC<{
  plant: Plant
  onEdit: (plant: Plant) => void
  onDelete: (id: string) => void
  onPhotoUpload: (plantId: string, photo: string) => void
}> = ({ plant, onEdit, onDelete, onPhotoUpload }) => {
  const [showDetails, setShowDetails] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const result = e.target?.result as string
        onPhotoUpload(plant.id, result)
      }
      reader.readAsDataURL(file)
    }
  }

  const getHealthColor = (status: string) => {
    switch (status) {
      case 'healthy': return 'text-green-600 bg-green-100'
      case 'warning': return 'text-yellow-600 bg-yellow-100'
      case 'critical': return 'text-red-600 bg-red-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getHealthIcon = (status: string) => {
    switch (status) {
      case 'healthy': return <CheckCircle className="w-4 h-4" />
      case 'warning': return <AlertTriangle className="w-4 h-4" />
      case 'critical': return <X className="w-4 h-4" />
      default: return <Info className="w-4 h-4" />
    }
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="group"
    >
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border-green-200 dark:border-green-800">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="font-semibold text-lg text-green-800 dark:text-green-200">{plant.name}</h3>
              <p className="text-sm text-green-600 dark:text-green-400">{plant.species}</p>
            </div>
            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button
                size="sm"
                variant="ghost"
                onClick={() => onEdit(plant)}
                className="h-8 w-8 p-0"
              >
                <Edit3 className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => onDelete(plant.id)}
                className="h-8 w-8 p-0 text-red-500 hover:text-red-700"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          <div className="flex items-center gap-2 mt-2">
            <Badge className={`${getHealthColor(plant.healthStatus)} border-0`}>
              {getHealthIcon(plant.healthStatus)}
              <span className="ml-1 capitalize">{plant.healthStatus}</span>
            </Badge>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Photo Gallery */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-green-700 dark:text-green-300">Photos</span>
              <Button
                size="sm"
                variant="outline"
                onClick={() => fileInputRef.current?.click()}
                className="h-7 px-2 text-xs border-green-300 text-green-700 hover:bg-green-50"
              >
                <Camera className="w-3 h-3 mr-1" />
                Add
              </Button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handlePhotoUpload}
                className="hidden"
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {plant.photos.map((photo, index) => (
                <div key={index} className="aspect-square rounded-lg overflow-hidden bg-green-100">
                  <img
                    src={photo}
                    alt={`${plant.name} photo ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                  />
                </div>
              ))}
              {plant.photos.length < 3 && (
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="aspect-square rounded-lg border-2 border-dashed border-green-300 flex items-center justify-center hover:border-green-400 transition-colors"
                >
                  <Plus className="w-6 h-6 text-green-400" />
                </button>
              )}
            </div>
          </div>

          {/* Progress */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-green-700 dark:text-green-300">Growth Progress</span>
              <span className="text-sm text-green-600 dark:text-green-400">{plant.progress}%</span>
            </div>
            <Progress value={plant.progress} className="h-2 bg-green-100" />
          </div>

          {/* Watering Schedule */}
          <div className="flex items-center gap-2 text-sm">
            <Droplets className="w-4 h-4 text-blue-500" />
            <span className="text-green-700 dark:text-green-300">{plant.wateringSchedule}</span>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-1">
            {plant.badges.map((badge, index) => (
              <Badge key={index} variant="secondary" className="text-xs bg-green-100 text-green-700">
                {badge}
              </Badge>
            ))}
          </div>

          {/* Expandable Details */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowDetails(!showDetails)}
            className="w-full justify-between text-green-700 hover:bg-green-50"
          >
            <span>Details</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${showDetails ? 'rotate-180' : ''}`} />
          </Button>

          <AnimatePresence>
            {showDetails && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="space-y-3 overflow-hidden"
              >
                <div className="text-sm space-y-2">
                  <div>
                    <span className="font-medium text-green-700 dark:text-green-300">Last Watered: </span>
                    <span className="text-green-600 dark:text-green-400">{plant.lastWatered}</span>
                  </div>
                  <div>
                    <span className="font-medium text-green-700 dark:text-green-300">Next Watering: </span>
                    <span className="text-green-600 dark:text-green-400">{plant.nextWatering}</span>
                  </div>
                  <div>
                    <span className="font-medium text-green-700 dark:text-green-300">Planted: </span>
                    <span className="text-green-600 dark:text-green-400">{plant.plantedDate}</span>
                  </div>
                  <div>
                    <span className="font-medium text-green-700 dark:text-green-300">Notes: </span>
                    <p className="text-green-600 dark:text-green-400 mt-1">{plant.notes}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </motion.div>
  )
}

const PlantForm: React.FC<{
  plant?: Plant
  onSave: (plant: Omit<Plant, 'id'>) => void
  onCancel: () => void
}> = ({ plant, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: plant?.name || '',
    species: plant?.species || '',
    wateringSchedule: plant?.wateringSchedule || '',
    notes: plant?.notes || '',
    plantedDate: plant?.plantedDate || new Date().toISOString().split('T')[0]
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave({
      ...formData,
      photos: plant?.photos || [],
      progress: plant?.progress || 0,
      healthStatus: plant?.healthStatus || 'healthy',
      badges: plant?.badges || [],
      lastWatered: plant?.lastWatered,
      nextWatering: plant?.nextWatering
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
    >
      <Card className="w-full max-w-md">
        <CardHeader>
          <h2 className="text-xl font-semibold text-green-800 dark:text-green-200">
            {plant ? 'Edit Plant' : 'Add New Plant'}
          </h2>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-green-700 dark:text-green-300 mb-1">
                Plant Name
              </label>
              <Input
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g., Sunny"
                required
                className="border-green-300 focus:border-green-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-green-700 dark:text-green-300 mb-1">
                Species
              </label>
              <Input
                value={formData.species}
                onChange={(e) => setFormData({ ...formData, species: e.target.value })}
                placeholder="e.g., Monstera Deliciosa"
                required
                className="border-green-300 focus:border-green-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-green-700 dark:text-green-300 mb-1">
                Watering Schedule
              </label>
              <Input
                value={formData.wateringSchedule}
                onChange={(e) => setFormData({ ...formData, wateringSchedule: e.target.value })}
                placeholder="e.g., Every 7 days"
                required
                className="border-green-300 focus:border-green-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-green-700 dark:text-green-300 mb-1">
                Planted Date
              </label>
              <Input
                type="date"
                value={formData.plantedDate}
                onChange={(e) => setFormData({ ...formData, plantedDate: e.target.value })}
                required
                className="border-green-300 focus:border-green-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-green-700 dark:text-green-300 mb-1">
                Notes
              </label>
              <Textarea
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Care notes, observations, etc."
                rows={3}
                className="border-green-300 focus:border-green-500"
              />
            </div>
            
            <div className="flex gap-2 pt-4">
              <Button type="submit" className="flex-1 bg-green-600 hover:bg-green-700">
                {plant ? 'Update' : 'Add'} Plant
              </Button>
              <Button type="button" variant="outline" onClick={onCancel} className="flex-1">
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  )
}

const CareSchedule: React.FC<{
  reminders: CareReminder[]
  onToggleComplete: (id: string) => void
}> = ({ reminders, onToggleComplete }) => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'watering': return <Droplets className="w-4 h-4 text-blue-500" />
      case 'fertilizing': return <Zap className="w-4 h-4 text-yellow-500" />
      case 'pruning': return <Edit3 className="w-4 h-4 text-green-500" />
      case 'repotting': return <Home className="w-4 h-4 text-brown-500" />
      default: return <Calendar className="w-4 h-4" />
    }
  }

  const upcomingReminders = reminders.filter(r => !r.completed)
  const completedReminders = reminders.filter(r => r.completed)

  return (
    <Card className="border-green-200 dark:border-green-800">
      <CardHeader>
        <h2 className="text-xl font-semibold text-green-800 dark:text-green-200 flex items-center gap-2">
          <Calendar className="w-5 h-5" />
          Care Schedule
        </h2>
      </CardHeader>
      <CardContent className="space-y-4">
        {upcomingReminders.length > 0 && (
          <div>
            <h3 className="font-medium text-green-700 dark:text-green-300 mb-2">Upcoming</h3>
            <div className="space-y-2">
              {upcomingReminders.map((reminder) => (
                <motion.div
                  key={reminder.id}
                  layout
                  className="flex items-center gap-3 p-3 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800"
                >
                  {getTypeIcon(reminder.type)}
                  <div className="flex-1">
                    <p className="font-medium text-green-800 dark:text-green-200">
                      {reminder.plantName}
                    </p>
                    <p className="text-sm text-green-600 dark:text-green-400 capitalize">
                      {reminder.type} - Due {reminder.dueDate}
                    </p>
                  </div>
                  <Button
                    size="sm"
                    onClick={() => onToggleComplete(reminder.id)}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    <CheckCircle className="w-4 h-4" />
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {completedReminders.length > 0 && (
          <div>
            <h3 className="font-medium text-green-700 dark:text-green-300 mb-2">Completed</h3>
            <div className="space-y-2">
              {completedReminders.map((reminder) => (
                <motion.div
                  key={reminder.id}
                  layout
                  className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 opacity-60"
                >
                  {getTypeIcon(reminder.type)}
                  <div className="flex-1">
                    <p className="font-medium text-gray-700 dark:text-gray-300 line-through">
                      {reminder.plantName}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">
                      {reminder.type} - Completed
                    </p>
                  </div>
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {reminders.length === 0 && (
          <div className="text-center py-8 text-green-600 dark:text-green-400">
            <Calendar className="w-12 h-12 mx-auto mb-2 opacity-50" />
            <p>No care reminders yet</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

const UserProfile: React.FC<{
  user: User
  achievements: Achievement[]
}> = ({ user, achievements }) => {
  return (
    <Card className="border-green-200 dark:border-green-800">
      <CardHeader>
        <div className="flex items-center gap-4">
          <Avatar className="w-16 h-16">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback className="bg-green-100 text-green-700">
              {user.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-green-800 dark:text-green-200">{user.name}</h2>
            <p className="text-green-600 dark:text-green-400">Level {user.level} Plant Parent</p>
            <div className="flex items-center gap-4 mt-2 text-sm text-green-600 dark:text-green-400">
              <span>{user.plantsOwned} Plants</span>
              <span>{user.streak} Day Streak</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* XP Progress */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-green-700 dark:text-green-300">Experience</span>
            <span className="text-sm text-green-600 dark:text-green-400">{user.xp}/{user.maxXp} XP</span>
          </div>
          <Progress value={(user.xp / user.maxXp) * 100} className="h-2 bg-green-100" />
        </div>

        {/* Achievements */}
        <div>
          <h3 className="font-medium text-green-700 dark:text-green-300 mb-3">Achievements</h3>
          <div className="grid grid-cols-1 gap-2">
            {achievements.map((achievement) => (
              <motion.div
                key={achievement.id}
                className={`flex items-center gap-3 p-3 rounded-lg border ${
                  achievement.unlocked
                    ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
                    : 'bg-gray-50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700'
                }`}
              >
                <div className={`p-2 rounded-full ${
                  achievement.unlocked ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
                }`}>
                  {achievement.unlocked ? <Award className="w-5 h-5" /> : achievement.icon}
                </div>
                <div className="flex-1">
                  <p className={`font-medium ${
                    achievement.unlocked ? 'text-green-800 dark:text-green-200' : 'text-gray-600 dark:text-gray-400'
                  }`}>
                    {achievement.title}
                  </p>
                  <p className={`text-sm ${
                    achievement.unlocked ? 'text-green-600 dark:text-green-400' : 'text-gray-500 dark:text-gray-500'
                  }`}>
                    {achievement.description}
                  </p>
                  {!achievement.unlocked && achievement.progress !== undefined && achievement.maxProgress && (
                    <div className="mt-2">
                      <Progress 
                        value={(achievement.progress / achievement.maxProgress) * 100} 
                        className="h-1 bg-gray-200" 
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        {achievement.progress}/{achievement.maxProgress}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// Main Component
const PlantCareAssistant: React.FC = () => {
  const [plants, setPlants] = useLocalStorage<Plant[]>('plants', mockPlants)
  const [reminders, setReminders] = useLocalStorage<CareReminder[]>('reminders', mockReminders)
  const [achievements] = useLocalStorage<Achievement[]>('achievements', mockAchievements)
  const [user] = useLocalStorage<User>('user', mockUser)
  const [darkMode, setDarkMode] = useLocalStorage<boolean>('darkMode', false)
  const [fontSize, setFontSize] = useLocalStorage<'small' | 'medium' | 'large'>('fontSize', 'medium')
  const [activeTab, setActiveTab] = useState<'plants' | 'schedule' | 'profile'>('plants')
  const [searchQuery, setSearchQuery] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [editingPlant, setEditingPlant] = useState<Plant | undefined>()
  const [showDiseaseAlert, setShowDiseaseAlert] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  const filteredPlants = plants.filter(plant =>
    plant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    plant.species.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleAddPlant = (plantData: Omit<Plant, 'id'>) => {
    const newPlant: Plant = {
      ...plantData,
      id: Date.now().toString()
    }
    setPlants([...plants, newPlant])
    setShowForm(false)
  }

  const handleEditPlant = (plantData: Omit<Plant, 'id'>) => {
    if (editingPlant) {
      setPlants(plants.map(p => p.id === editingPlant.id ? { ...plantData, id: editingPlant.id } : p))
      setEditingPlant(undefined)
      setShowForm(false)
    }
  }

  const handleDeletePlant = (id: string) => {
    setPlants(plants.filter(p => p.id !== id))
    setReminders(reminders.filter(r => r.plantId !== id))
  }

  const handlePhotoUpload = (plantId: string, photo: string) => {
    setPlants(plants.map(p => 
      p.id === plantId 
        ? { ...p, photos: [...p.photos, photo] }
        : p
    ))
  }

  const handleToggleReminder = (id: string) => {
    setReminders(reminders.map(r => 
      r.id === id ? { ...r, completed: !r.completed } : r
    ))
  }

  const getFontSizeClass = () => {
    switch (fontSize) {
      case 'small': return 'text-sm'
      case 'large': return 'text-lg'
      default: return 'text-base'
    }
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900 dark:to-emerald-900 ${getFontSizeClass()}`}>
      {/* Disease Alert Banner */}
      <AnimatePresence>
        {showDiseaseAlert && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="bg-yellow-100 dark:bg-yellow-900/50 border-b border-yellow-200 dark:border-yellow-800 p-4"
          >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                <div>
                  <p className="font-medium text-yellow-800 dark:text-yellow-200">
                    Plant Health Alert
                  </p>
                  <p className="text-sm text-yellow-700 dark:text-yellow-300">
                    Ruby (Fiddle Leaf Fig) showing signs of overwatering. Check soil moisture and adjust schedule.
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowDiseaseAlert(false)}
                className="text-yellow-600 hover:text-yellow-800"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-green-200 dark:border-green-800 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-green-800">
                Grow mate AI
              </h1>
            </div>

            <div className="flex items-center gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-green-500" />
                <Input
                  placeholder="Search plants..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-64 border-green-300 focus:border-green-500"
                />
              </div>

              {/* Accessibility Controls */}
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setFontSize(fontSize === 'small' ? 'medium' : fontSize === 'medium' ? 'large' : 'small')}
                  className="text-green-700 hover:bg-green-100"
                >
                  Aa
                </Button>
                <div className="flex items-center gap-2">
                  <Sun className="w-4 h-4 text-green-600" />
                  <Switch
                    checked={darkMode}
                    onCheckedChange={setDarkMode}
                  />
                  <Moon className="w-4 h-4 text-green-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border-b border-green-200 dark:border-green-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {[
              { id: 'plants', label: 'My Plants', icon: Leaf },
              { id: 'schedule', label: 'Care Schedule', icon: Calendar },
              { id: 'profile', label: 'Profile', icon: User }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-3 py-4 border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-green-500 text-green-700 dark:text-green-300'
                    : 'border-transparent text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AnimatePresence mode="wait">
          {activeTab === 'plants' && (
            <motion.div
              key="plants"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold text-green-800 dark:text-green-200">
                  My Plants ({filteredPlants.length})
                </h2>
                <Button
                  onClick={() => setShowForm(true)}
                  className="bg-green-600 hover:bg-green-700"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Plant
                </Button>
              </div>

              {filteredPlants.length === 0 ? (
                <Card className="border-green-200 dark:border-green-800">
                  <CardContent className="text-center py-12">
                    <Leaf className="w-16 h-16 mx-auto mb-4 text-green-400 opacity-50" />
                    <h3 className="text-xl font-semibold text-green-800 dark:text-green-200 mb-2">
                      {searchQuery ? 'No plants found' : 'No plants yet'}
                    </h3>
                    <p className="text-green-600 dark:text-green-400 mb-4">
                      {searchQuery 
                        ? 'Try adjusting your search terms'
                        : 'Start your plant care journey by adding your first plant!'
                      }
                    </p>
                    {!searchQuery && (
                      <Button
                        onClick={() => setShowForm(true)}
                        className="bg-green-600 hover:bg-green-700"
                      >
                        <Plus className="w-4 h-4 mr-2" />
                        Add Your First Plant
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <AnimatePresence>
                    {filteredPlants.map((plant) => (
                      <PlantCard
                        key={plant.id}
                        plant={plant}
                        onEdit={(plant) => {
                          setEditingPlant(plant)
                          setShowForm(true)
                        }}
                        onDelete={handleDeletePlant}
                        onPhotoUpload={handlePhotoUpload}
                      />
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </motion.div>
          )}

          {activeTab === 'schedule' && (
            <motion.div
              key="schedule"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <CareSchedule
                reminders={reminders}
                onToggleComplete={handleToggleReminder}
              />
            </motion.div>
          )}

          {activeTab === 'profile' && (
            <motion.div
              key="profile"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <UserProfile
                user={user}
                achievements={achievements}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Plant Form Modal */}
      <AnimatePresence>
        {showForm && (
          <PlantForm
            plant={editingPlant}
            onSave={editingPlant ? handleEditPlant : handleAddPlant}
            onCancel={() => {
              setShowForm(false)
              setEditingPlant(undefined)
            }}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default PlantCareAssistant