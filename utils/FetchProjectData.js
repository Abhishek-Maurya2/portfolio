// File: utils/FetchProjectData.js

export const fetchProjectsData = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/fetchProjects`
    );
    if (!res.ok) throw new Error('Failed to fetch projects');
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
};
