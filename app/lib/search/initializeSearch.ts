// Initialize search system by importing all subject metadata
// This ensures all chapters are registered before search is used

import "@/app/sem1/c/metadata";
import "@/app/sem1/ep/metadata";
import "@/app/sem1/em1/metadata";
import "@/app/sem2/em2/metadata";
import "@/app/sem2/oops/metadata";

// This file is imported by SearchBar to ensure metadata is loaded
export const SEARCH_INITIALIZED = true;
