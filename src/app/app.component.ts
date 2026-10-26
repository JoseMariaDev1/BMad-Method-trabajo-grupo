import { Component, OnDestroy } from '@angular/core';
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
  sealQuality: number; // percentage, e.g. 98%
  waterLevel: string;  // e.g. "650 ml (Óptimo)"
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

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnDestroy {
  // Collection of hookahs
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
      waterLevel: '620 ml (Nivel exacto)'
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
      waterLevel: '450 ml (Vaciar y lavar)'
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
      waterLevel: '750 ml (Transparente)'
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
      waterLevel: '580 ml (Óptimo)'
    }
  ];

  selectedIndex: number = 0;

  get currentHookah(): HookahItem {
    return this.hookahs[this.selectedIndex];
  }

  // Hotspots definitions
  hotspots: HotspotInfo[] = [
    {
      id: 'bowl',
      title: 'Cazoleta & Gestor de Calor',
      tag: 'SUPERIOR',
      description: 'Cazoleta phunnel de barro blanco con gestor HMD de aluminio. Distribución térmica uniforme.',
      metricLabel: 'Gestión Térmica',
      metricValue: '210°C Óptimo'
    },
    {
      id: 'stem',
      title: 'Mástil & Sistema de Purga',
      tag: 'CENTRO',
      description: 'Cuerpo de acero inoxidable de alta densidad con purga de cámara cerrada que vacía la base de 1 soplido.',
      metricLabel: 'Caudal de Tiro',
      metricValue: '15mm Directo'
    },
    {
      id: 'base',
      title: 'Base de Cristal & Agua',
      tag: 'INFERIOR',
      description: 'Vaso de cristal con fondo grueso para máxima estabilidad y silenciador sumergido en agua fresca.',
      metricLabel: 'Nivel Óptimo',
      metricValue: '1.5 cm s/difusor'
    },
    {
      id: 'hose',
      title: 'Manguera & Conexión Soft',
      tag: 'LATERAL',
      description: 'Tubo de silicona mate antiestática con boquilla slim de agarre suave y sellado hermético por tórica.',
      metricLabel: 'Hermeticidad',
      metricValue: '100% Sin fugas'
    }
  ];

  activeHotspot: HotspotInfo = this.hotspots[0];
  isInspecting: boolean = false;

  // Care tasks checklist
  tasks: CareTask[] = [
    {
      id: 'task-1',
      title: 'Enjuagar la base con agua tibia',
      detail: 'Elimina residuos de melaza tras la última sesión',
      period: 'HECHO',
      completed: true
    },
    {
      id: 'task-2',
      title: 'Limpieza profunda de mástil y purga',
      detail: 'Pasar cepillo largo y revisar bolas de purga',
      period: 'HOY',
      completed: false
    },
    {
      id: 'task-3',
      title: 'Descalcificar cazoleta y gestor',
      detail: 'Retirar restos de tabaco quemado con esponja suave',
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

  // Active session timer simulation
  isSessionActive: boolean = false;
  sessionSeconds: number = 0;
  private sessionTimerInterval: any = null;

  get formattedSessionTime(): string {
    const mins = Math.floor(this.sessionSeconds / 60);
    const secs = this.sessionSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }

  get completedTasksCount(): number {
    return this.tasks.filter(t => t.completed).length;
  }

  get careProgressPercentage(): number {
    return Math.round((this.completedTasksCount / this.tasks.length) * 100);
  }

  selectHookah(index: number): void {
    this.selectedIndex = index;
  }

  nextHookah(): void {
    this.selectedIndex = (this.selectedIndex + 1) % this.hookahs.length;
  }

  prevHookah(): void {
    this.selectedIndex = (this.selectedIndex - 1 + this.hookahs.length) % this.hookahs.length;
  }

  selectHotspot(hotspot: HotspotInfo): void {
    this.activeHotspot = hotspot;
    this.isInspecting = true;
  }

  toggleInspect(): void {
    this.isInspecting = !this.isInspecting;
  }

  toggleTask(task: CareTask): void {
    task.completed = !task.completed;
  }

  toggleSession(): void {
    this.isSessionActive = !this.isSessionActive;
    if (this.isSessionActive) {
      if (this.sessionSeconds === 0) {
        this.sessionSeconds = 1;
      }
      this.sessionTimerInterval = setInterval(() => {
        this.sessionSeconds++;
      }, 1000);
    } else {
      if (this.sessionTimerInterval) {
        clearInterval(this.sessionTimerInterval);
        this.sessionTimerInterval = null;
      }
    }
  }

  resetSession(): void {
    this.isSessionActive = false;
    if (this.sessionTimerInterval) {
      clearInterval(this.sessionTimerInterval);
      this.sessionTimerInterval = null;
    }
    this.sessionSeconds = 0;
  }

  markCurrentAsCleaned(): void {
    const current = this.currentHookah;
    current.status = 'optimal';
    current.statusLabel = 'Recién limpiada';
    current.lastCleaned = 'Ahora mismo';
    current.sealQuality = 100;

    // Also mark task 2 as completed if current is Alma Mini
    const task2 = this.tasks.find(t => t.id === 'task-2');
    if (task2) {
      task2.completed = true;
    }
  }

  ngOnDestroy(): void {
    if (this.sessionTimerInterval) {
      clearInterval(this.sessionTimerInterval);
    }
  }
}
