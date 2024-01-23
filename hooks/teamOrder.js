export default function teamOrder(teamMembers) {
    const teamOrdered = teamMembers.sort((a, b) => {
        if (a.fields.websiteOrder === undefined) return 1;
        if (b.fields.websiteOrder === undefined) return -1;
        return a.fields.websiteOrder - b.fields.websiteOrder;
    })

    return teamOrdered;
}