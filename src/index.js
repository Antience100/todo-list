import "./styles.css";
import { listItemFactory } from "./modules/listItemFactory";

const testItem = listItemFactory("Make tacos", "make tacos with homemade seasoning", "19/6/2025 10:00PM", "high", "incomplete");

testItem.itemInfo();