
import Lead from '../models/leadSchema';

// Function to fetch leads with optimized query
const fetchLeads = async (filters, projection, options) => {
    // Use indexing, projection, and other optimizations
    return await Lead.find(filters, projection, options).lean();
};

export { fetchLeads };
