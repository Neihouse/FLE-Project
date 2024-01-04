
import Lead from '../models/leadSchema';

const getLeadStatistics = async () => {
    // Calculate basic statistics such as total leads, leads by source, etc.
    const totalLeads = await Lead.countDocuments();
    // More statistics calculations will be added here

    return {
        totalLeads,
        // Additional statistics will be included here
    };
};

export { getLeadStatistics };
