import { Component, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface HookahItem {
  id: string;
  name: string;
  tagline: string;
  material: string;
  year: number;
  height: string;
  weight: string;
  purgeType: string;
  diffuser: string;
  status: 'optimal' | 'needs-cleaning' | 'in-session';
  statusLabel: string;
  lastCleaned: string;
  totalSessions: number;
  themeColor: string;
  glowColor: string;
  waterColor: string;
  stemColor: string;
  bowlColor: string;
  sealQuality: number;
  waterLevel: string;
  tasks: CareTask[];
}

export interface CareTask {
  id: string;
  title: string;
  detail: string;
  period: string;
  completed: boolean;
}

export interface HotspotInfo {
  id: 'bowl' | 'stem' | 'base' | 'hose';
  title: string;
  tag: string;
  description: string;
  metricLabel: string;
  metricValue: string;
}

export interface InventoryItem {
  id: string;
  name: string;
  detail: string;
  icon: string;
  amount: number;
  unit: string;
  isPercentage: boolean;
  warningThreshold: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnDestroy {
  constructor(private cdr: ChangeDetectorRef) {}
  // =========================================================================
  // FUNCIONALIDAD 1: GESTIÓN Y CATÁLOGO DE COLECCIÓN DE KACHIMBAS
  // =========================================================================
  hookahs: HookahItem[] = [
    {
      id: 'nebula-one',
      name: 'Nébula One',
      tagline: 'Edición Amatista & Acero V2A',
      material: 'Acero Inoxidable V2A',
      year: 2024,
      height: '54 cm',
      weight: '2.8 kg',
      purgeType: 'Purga vertical 360° en cascada',
      diffuser: 'Silenciador regulable 4 puntos',
      status: 'optimal',
      statusLabel: 'Lista para fumar',
      lastCleaned: 'Ayer · 18:30',
      totalSessions: 46,
      themeColor: '#9353d3',
      glowColor: 'rgba(147, 83, 211, 0.45)',
      waterColor: '#7a88ff',
      stemColor: '#2d2744',
      bowlColor: '#a855f7',
      sealQuality: 99,
      waterLevel: '620 ml (Nivel exacto)',
      tasks: [
        { id: 'task-1', title: 'Enjuagar la base con agua tibia', detail: 'Elimina residuos de melaza tras la última sesión', period: 'HECHO', completed: true },
        { id: 'task-2', title: 'Limpieza profunda de mástil y purga', detail: 'Pasar cepillo largo y revisar bolas de purga', period: 'HOY', completed: true },
        { id: 'task-3', title: 'Descalcificar cazoleta y gestor', detail: 'Retirar restos con esponja suave', period: 'JUEVES', completed: false },
        { id: 'task-4', title: 'Comprobar lubricación de juntas', detail: 'Verificar ajuste de silicona', period: 'DOMINGO', completed: true }
      ]
    },
    {
      id: 'alma-mini',
      name: 'Alma Mini',
      tagline: 'Edición Sage Olive & Alum',
      material: 'Aluminio Anodizado Aeroespacial',
      year: 2023,
      height: '38 cm',
      weight: '1.7 kg',
      purgeType: 'Purga horizontal integrada',
      diffuser: 'Difusor integrado silencioso',
      status: 'needs-cleaning',
      statusLabel: 'Toca limpiar base',
      lastCleaned: 'Hace 6 días',
      totalSessions: 32,
      themeColor: '#10b981',
      glowColor: 'rgba(16, 185, 129, 0.45)',
      waterColor: '#34d399',
      stemColor: '#1d2e27',
      bowlColor: '#10b981',
      sealQuality: 94,
      waterLevel: '450 ml (Vaciar y lavar)',
      tasks: [
        { id: 'task-1', title: 'Enjuagar la base con agua tibia', detail: 'Elimina residuos y agua estancada', period: 'URGENTE', completed: false },
        { id: 'task-2', title: 'Limpieza profunda de mástil y purga', detail: 'Desmontar válvula y pasar cepillo', period: 'HOY', completed: false },
        { id: 'task-3', title: 'Descalcificar cazoleta y gestor', detail: 'Retirar restos con esponja suave', period: 'HOY', completed: false },
        { id: 'task-4', title: 'Comprobar lubricación de juntas', detail: 'Revisar toricas del conector', period: 'PENDIENTE', completed: false }
      ]
    },
    {
      id: 'oasis-glass',
      name: 'Oasis Glass',
      tagline: 'Edición Cristal Glaciar & Titanio',
      material: 'Vidrio Soplado y Titanio',
      year: 2025,
      height: '62 cm',
      weight: '3.4 kg',
      purgeType: 'Purga invertida con válvula oculta',
      diffuser: 'Doble cámara de difusión',
      status: 'optimal',
      statusLabel: 'Al día · Óptimo',
      lastCleaned: 'Hace 2 días',
      totalSessions: 19,
      themeColor: '#00d2ff',
      glowColor: 'rgba(0, 210, 255, 0.45)',
      waterColor: '#38bdf8',
      stemColor: '#192b3b',
      bowlColor: '#0ea5e9',
      sealQuality: 98,
      waterLevel: '750 ml (Transparente)',
      tasks: [
        { id: 'task-1', title: 'Brillo y enjuague de cristal bohemio', detail: 'Lavado con agua tibia y jabón suave', period: 'HECHO', completed: true },
        { id: 'task-2', title: 'Limpieza de cámara y titanio', detail: 'Secado con microfibra sin rayar', period: 'HECHO', completed: true },
        { id: 'task-3', title: 'Descalcificar difusor sumergido', detail: 'Comprobar orificios de difusión', period: 'VIERNES', completed: false },
        { id: 'task-4', title: 'Comprobar juntas de estanqueidad', detail: 'Sellado al 98%', period: 'DOMINGO', completed: true }
      ]
    },
    {
      id: 'phantom-gold',
      name: 'Phantom Carbon',
      tagline: 'Edición Carbono Forjado & Oro',
      material: 'Fibra de Carbono y Latón',
      year: 2024,
      height: '48 cm',
      weight: '2.2 kg',
      purgeType: 'Purga multidireccional radial',
      diffuser: 'Ajuste magnético desmontable',
      status: 'optimal',
      statusLabel: 'Calibrada al 100%',
      lastCleaned: 'Hace 3 días',
      totalSessions: 37,
      themeColor: '#f59e0b',
      glowColor: 'rgba(245, 158, 11, 0.45)',
      waterColor: '#fbbf24',
      stemColor: '#30261a',
      bowlColor: '#f59e0b',
      sealQuality: 97,
      waterLevel: '580 ml (Óptimo)',
      tasks: [
        { id: 'task-1', title: 'Enjuagar base y silenciador', detail: 'Lavado tras última sesión', period: 'HECHO', completed: true },
        { id: 'task-2', title: 'Limpieza de mástil de carbono', detail: 'Pasar cepillo por conducto interno', period: 'HECHO', completed: true },
        { id: 'task-3', title: 'Limpiar cazoleta y gestor', detail: 'Retirar restos y secar', period: 'HECHO', completed: true },
        { id: 'task-4', title: 'Lubricación de juntas y purga', detail: 'Verificar bolas de purga radial', period: 'HECHO', completed: true }
      ]
    }
  ];

  selectedIndex: number = 0;

  get currentHookah(): HookahItem {
    return this.hookahs[this.selectedIndex] || this.hookahs[0];
  }

  // Modal para añadir kachimba
  isAddModalOpen: boolean = false;
  newHookahName: string = '';
  newHookahTagline: string = '';
  newHookahMaterial: string = 'Acero Inoxidable V2A';
  newHookahHeight: string = '52 cm';
  newHookahPurge: string = 'Purga vertical 360°';
  newHookahColor: string = '#ec4899';

  selectHookah(index: number): void {
    if (index >= 0 && index < this.hookahs.length) {
      this.selectedIndex = index;
      this.cdr.detectChanges();
    }
  }

  nextHookah(): void {
    this.selectedIndex = (this.selectedIndex + 1) % this.hookahs.length;
    this.cdr.detectChanges();
  }

  prevHookah(): void {
    this.selectedIndex = (this.selectedIndex - 1 + this.hookahs.length) % this.hookahs.length;
    this.cdr.detectChanges();
  }

  openAddModal(): void {
    this.newHookahName = '';
    this.newHookahTagline = 'Edición Titanium & Carbon';
    this.newHookahMaterial = 'Acero Inoxidable V2A';
    this.newHookahHeight = '50 cm';
    this.newHookahPurge = 'Purga vertical 360°';
    this.newHookahColor = '#ec4899';
    this.isAddModalOpen = true;
  }

  closeAddModal(): void {
    this.isAddModalOpen = false;
  }

  saveNewHookah(): void {
    if (!this.newHookahName.trim()) return;

    const id = 'hookah-' + Date.now();
    const newHookah: HookahItem = {
      id,
      name: this.newHookahName.trim(),
      tagline: this.newHookahTagline.trim() || 'Edición Personalizada',
      material: this.newHookahMaterial,
      year: new Date().getFullYear(),
      height: this.newHookahHeight || '50 cm',
      weight: '2.4 kg',
      purgeType: this.newHookahPurge,
      diffuser: 'Silenciador regulable 4 posiciones',
      status: 'optimal',
      statusLabel: 'Nueva en colección',
      lastCleaned: 'Hoy · Recién calibrada',
      totalSessions: 0,
      themeColor: this.newHookahColor,
      glowColor: this.hexToRgba(this.newHookahColor, 0.45),
      waterColor: this.newHookahColor,
      stemColor: '#1e1c29',
      bowlColor: this.newHookahColor,
      sealQuality: 100,
      waterLevel: '600 ml (Nivel exacto)',
      tasks: [
        { id: 'task-1', title: 'Enjuagar la base con agua tibia', detail: 'Lavado inicial antes de usar', period: 'HOY', completed: false },
        { id: 'task-2', title: 'Limpieza de mástil y purga', detail: 'Comprobar conductos de tiro', period: 'HOY', completed: false },
        { id: 'task-3', title: 'Preparar cazoleta y gestor', detail: 'Ajustar barro y calor', period: 'HOY', completed: false },
        { id: 'task-4', title: 'Verificar ajuste de juntas', detail: 'Comprobar hermeticidad inicial', period: 'HOY', completed: true }
      ]
    };

    this.hookahs.push(newHookah);
    this.selectedIndex = this.hookahs.length - 1;
    this.closeAddModal();
  }

  deleteCurrentHookah(): void {
    if (this.hookahs.length <= 1) return;
    this.hookahs.splice(this.selectedIndex, 1);
    this.selectedIndex = Math.max(0, this.selectedIndex - 1);
  }

  private hexToRgba(hex: string, alpha: number): string {
    let c = hex.replace('#', '');
    if (c.length === 3) {
      c = c.split('').map(x => x + x).join('');
    }
    const num = parseInt(c, 16);
    const r = (num >> 16) & 255;
    const g = (num >> 8) & 255;
    const b = num & 255;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  // =========================================================================
  // FUNCIONALIDAD 2: ESTUDIO DE INSPECCIÓN TÉCNICA & HOTSPOTS INTERACTIVOS
  // =========================================================================
  hotspots: HotspotInfo[] = [
    {
      id: 'bowl',
      title: 'Cazoleta & Gestor de Calor',
      tag: 'SUPERIOR',
      description: 'Cazoleta phunnel de barro con gestor de calor HMD. Distribución térmica óptima para máxima intensidad.',
      metricLabel: 'Gestión Térmica',
      metricValue: '210°C Óptimo'
    },
    {
      id: 'stem',
      title: 'Mástil & Sistema de Purga',
      tag: 'CENTRO',
      description: 'Cuerpo mecanizado con cámara de purga sellada que vacía la base de humo viciado en un solo soplido.',
      metricLabel: 'Caudal de Tiro',
      metricValue: '15mm Directo'
    },
    {
      id: 'base',
      title: 'Base de Cristal & Nivel de Agua',
      tag: 'INFERIOR',
      description: 'Vaso de cristal de alta densidad con silenciador sumergido. Estabilidad y filtrado suave garantizado.',
      metricLabel: 'Nivel Recomendado',
      metricValue: '1.5 - 2 cm s/difusor'
    },
    {
      id: 'hose',
      title: 'Manguera & Conexión Soft',
      tag: 'LATERAL',
      description: 'Tubo de silicona mate lavable antiestática con boquilla slim y acople de junta tórica de estanqueidad.',
      metricLabel: 'Hermeticidad',
      metricValue: '100% Sin fugas'
    }
  ];

  activeHotspot: HotspotInfo = this.hotspots[0];
  isInspecting: boolean = false;

  selectHotspot(hotspot: HotspotInfo): void {
    this.activeHotspot = hotspot;
    this.isInspecting = true;
  }

  toggleInspect(): void {
    this.isInspecting = !this.isInspecting;
  }

  getDynamicHotspotMetric(hotspot: HotspotInfo): string {
    switch (hotspot.id) {
      case 'bowl':
        return this.isSessionActive ? `${this.bowlTemperature}°C en cazoleta` : '210°C Calibrado';
      case 'stem':
        return this.currentHookah.purgeType;
      case 'base':
        return this.currentHookah.waterLevel;
      case 'hose':
        return `${this.currentHookah.sealQuality}% Estanqueidad`;
      default:
        return hotspot.metricValue;
    }
  }

  // =========================================================================
  // FUNCIONALIDAD 3: MONITOR DE SESIÓN DE FUMADA EN VIVO Y TELEMETRÍA TÉRMICA
  // =========================================================================
  isSessionActive: boolean = false;
  sessionSeconds: number = 0;
  sessionTenths: number = 0;
  private sessionTimerInterval: any = null;

  get formattedSessionTime(): string {
    const mins = Math.floor(this.sessionSeconds / 60);
    const secs = this.sessionSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }

  get coalsHealth(): number {
    if (!this.isSessionActive && this.sessionSeconds === 0) return 100;
    const used = Math.min(85, Math.floor(this.sessionSeconds / 40));
    return Math.max(15, 100 - used);
  }

  get bowlTemperature(): number {
    if (!this.isSessionActive && this.sessionSeconds === 0) return 24;
    const target = 212;
    const progress = Math.min(1, this.sessionSeconds / 25);
    return Math.round(24 + (target - 24) * progress);
  }

  toggleSession(): void {
    this.isSessionActive = !this.isSessionActive;
    if (this.isSessionActive) {
      if (this.sessionSeconds === 0) {
        this.sessionSeconds = 1;
      }
      this.currentHookah.status = 'in-session';
      this.currentHookah.statusLabel = 'Sesión en curso';

      this.sessionTimerInterval = setInterval(() => {
        this.sessionTenths = (this.sessionTenths + 1) % 10;
        if (this.sessionTenths === 0) {
          this.sessionSeconds++;
        }
        this.cdr.detectChanges();
      }, 100);
    } else {
      if (this.sessionTimerInterval) {
        clearInterval(this.sessionTimerInterval);
        this.sessionTimerInterval = null;
      }
      this.cdr.detectChanges();
    }
  }

  finishSession(): void {
    if (this.sessionTimerInterval) {
      clearInterval(this.sessionTimerInterval);
      this.sessionTimerInterval = null;
    }
    this.isSessionActive = false;
    this.currentHookah.totalSessions++;
    this.currentHookah.status = 'needs-cleaning';
    this.currentHookah.statusLabel = 'Toca limpiar tras fumar';
    this.currentHookah.sealQuality = Math.max(88, this.currentHookah.sealQuality - 2);

    const coals = this.inventory.find(i => i.id === 'coals');
    if (coals && coals.amount > 10) {
      coals.amount = Math.max(0, coals.amount - 15);
    }
    this.sessionSeconds = 0;
    this.sessionTenths = 0;
    this.cdr.detectChanges();
  }

  resetSession(): void {
    if (this.sessionTimerInterval) {
      clearInterval(this.sessionTimerInterval);
      this.sessionTimerInterval = null;
    }
    this.isSessionActive = false;
    this.sessionSeconds = 0;
    this.sessionTenths = 0;
    this.cdr.detectChanges();
    if (this.currentHookah.status === 'in-session') {
      this.currentHookah.status = 'optimal';
      this.currentHookah.statusLabel = 'Lista para fumar';
    }
  }

  // =========================================================================
  // FUNCIONALIDAD 4: PLANIFICADOR Y RUTINA DE CUIDADOS & MANTENIMIENTO
  // =========================================================================
  get tasks(): CareTask[] {
    return this.currentHookah?.tasks || [];
  }

  _unusedTasks: any = [
    {
      id: 'task-1',
      title: 'Enjuagar la base con agua tibia',
      detail: 'Elimina residuos de melaza y aromas de la última sesión',
      period: 'HECHO',
      completed: true
    },
    {
      id: 'task-2',
      title: 'Limpieza profunda de mástil y purga',
      detail: 'Pasar cepillo largo y revisar las bolas de purga',
      period: 'HOY',
      completed: false
    },
    {
      id: 'task-3',
      title: 'Descalcificar cazoleta y gestor',
      detail: 'Retirar restos con esponja suave sin dañar el esmalte',
      period: 'JUEVES',
      completed: false
    },
    {
      id: 'task-4',
      title: 'Comprobar lubricación de juntas tóricas',
      detail: 'Verificar ajuste de silicona del conector de manguera',
      period: 'DOMINGO',
      completed: true
    }
  ];

  newTaskTitle: string = '';
  newTaskPeriod: string = 'HOY';

  get completedTasksCount(): number {
    return this.tasks.filter(t => t.completed).length;
  }

  get careProgressPercentage(): number {
    if (this.tasks.length === 0) return 100;
    return Math.round((this.completedTasksCount / this.tasks.length) * 100);
  }

  toggleTask(task: CareTask): void {
    task.completed = !task.completed;
    this.cdr.detectChanges();
  }

  addNewTask(): void {
    if (!this.newTaskTitle.trim()) return;
    this.tasks.push({
      id: 'task-' + Date.now(),
      title: this.newTaskTitle.trim(),
      detail: 'Mantenimiento preventivo personalizado',
      period: this.newTaskPeriod || 'HOY',
      completed: false
    });
    this.newTaskTitle = '';
  }

  deleteTask(task: CareTask, event: Event): void {
    event.stopPropagation();
    this.currentHookah.tasks = this.currentHookah.tasks.filter(t => t.id !== task.id);
    this.cdr.detectChanges();
  }

  markCurrentAsCleaned(): void {
    const current = this.currentHookah;
    current.status = 'optimal';
    current.statusLabel = 'Recién limpiada · Óptima';
    current.lastCleaned = 'Ahora mismo';
    current.sealQuality = 100;

    current.tasks.forEach(t => t.completed = true);
    this.cdr.detectChanges();



  }

  // =========================================================================
  // FUNCIONALIDAD 5: GESTOR DE STOCK E INVENTARIO DE CONSUMIBLES
  // =========================================================================
  inventory: InventoryItem[] = [
    {
      id: 'coals',
      name: 'King Coco 26mm',
      detail: 'Carbón natural de coco (1kg)',
      icon: '🪵',
      amount: 80,
      unit: '%',
      isPercentage: true,
      warningThreshold: 25
    },
    {
      id: 'bowls',
      name: 'Cazoletas Preparadas',
      detail: 'Oblako M & Helium Bowl limpias',
      icon: '🏺',
      amount: 4,
      unit: 'uds',
      isPercentage: false,
      warningThreshold: 1
    },
    {
      id: 'mouthpieces',
      name: 'Boquillas Higiénicas',
      detail: 'Boquillas de silicona para invitados',
      icon: '💨',
      amount: 35,
      unit: 'uds',
      isPercentage: false,
      warningThreshold: 10
    },
    {
      id: 'cleaner',
      name: 'Limpiador Bio Shisha Cleaner',
      detail: 'Líquido desinfectante de cristales',
      icon: '✨',
      amount: 45,
      unit: '%',
      isPercentage: true,
      warningThreshold: 20
    }
  ];

  useItem(item: InventoryItem): void {
    if (item.isPercentage) {
      item.amount = Math.max(0, item.amount - 15);
    } else {
      item.amount = Math.max(0, item.amount - 1);
    }
  }

  restockItem(item: InventoryItem): void {
    if (item.isPercentage) {
      item.amount = 100;
    } else {
      item.amount += 10;
    }
  }

  ngOnDestroy(): void {
    if (this.sessionTimerInterval) {
      clearInterval(this.sessionTimerInterval);
    }
  }
}
