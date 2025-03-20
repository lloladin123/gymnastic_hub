import { Child } from "./child";
import { User } from "./user";

export interface Parent extends User {
    children: Child[];
}