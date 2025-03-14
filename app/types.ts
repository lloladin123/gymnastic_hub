export interface CheckListItem {
    id: number;
    text: string;
    checked: boolean;
}

export interface NavItem {
    id: number;
    text: string;
    href: string;
}

export interface Instructor {
    id: number;
    name: string;
}

export interface PlanningEvent {
    id: number;
    title: string;
    instructors: Instructor[];
    type: string;
    date: Date;
    description: string;
    location: string;
}