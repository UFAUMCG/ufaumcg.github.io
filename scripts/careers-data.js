// Careers data structure - all career information in one place
const careersData = {
    // Navigation shortcuts
    shortcuts: [
        { year: 2026, id: 'full-time-2026' },
        { year: 2025, id: 'full-time-2025' },
        { year: 2024, id: 'full-time-2024' },
        { year: 2023, id: 'full-time-2023' },
        { year: 2022, id: 'full-time-2022' },
        { year: 2021, id: 'full-time-2021' },
        { year: 2020, id: 'full-time-2020' },
        { year: 2019, id: 'full-time-2019' },
        { year: 2018, id: 'full-time-2018' },
        { year: 2017, id: 'full-time-2017' },
        { year: 2016, id: 'full-time-2016' },
        { year: 2015, id: 'full-time-2015' }
    ],

    // Career entries organized by year and type
    careers: {
        2026: {
            fullTime: {
                'Investment Banking': [
                    { name: 'Nihal Singh', company: 'Morgan Stanley', group: 'Technology', location: 'Menlo Park, CA' },

                ],
                'Consulting': [
                    { name: 'Thomas Gerken', company: 'Bain & Company', group: 'Generalist', location: 'San Francisco, CA' }
                ]
            },
            summer: {
                'Investment Banking': [
                    { name: 'Clement Liu', company: 'JP Morgan', group: 'Technology', location: 'San Francisco, CA' },
                    { name: 'Vaishu Enduri', company: 'Morgan Stanley', group: 'Technology', location: 'Menlo Park, CA' },
                    { name: 'Dora Wang', company: 'Barclays', group: 'Technology', location: 'San Francisco, CA' },
                    { name: 'Maya Rao', company: 'Centerview Partners', group: 'Life Sciences', location: 'San Francisco, CA' },
                    { name: 'Maxwell Love', company: 'Centerview Partners', group: 'Life Sciences', location: 'San Francisco, CA' }
                ],
                'Finance': [
                    { name: 'Mateo Cervantes', company: 'Ares', group: 'Private Equity', location: 'Los Angeles, CA' },
                ],

            }
        },
        2025: {
            fullTime: {
                'Investment Banking': [
                    { name: 'Joyce Chiang', company: 'Morgan Stanley', group: 'Financial Sponsors & Western Region Coverage', location: 'San Francisco, CA' },
                    { name: 'Kevin Seog', company: 'Perella Weinberg Partners', group: 'Technology M&A', location: 'San Francisco, CA' },
                    { name: 'Max Sarwar', company: 'Barclays', group: 'Technology', location: 'San Francisco, CA' },
                    { name: 'Anson Seto', company: 'Barclays', group: 'Healthcare', location: 'San Francisco, CA' },
                    { name: 'Hailey Kim', company: 'Barclays', group: 'Technology', location: 'New York, NY' },
                    { name: 'Richard Criley', company: 'Centerview Partners', group: 'Life Sciences', location: 'San Francisco, CA' }
                ],
                'Consulting': [
                    { name: 'Rose Li', company: 'Bain & Company', group: 'Generalist', location: 'San Francisco, CA' },
                    { name: 'Thomas Gerken', company: 'Bain & Company', group: 'Generalist', location: 'San Francisco, CA' }
                ]
            },
            summer: {
                'Investment Banking': [
                    { name: 'Aiden Chan', company: 'Citi', group: 'Technology', location: 'San Francisco, CA' },
                    { name: 'Mateo Cervantes', company: 'Deutsche Bank', group: 'Technology', location: 'San Francisco, CA' },
                    { name: 'Hannah Choi', company: 'Solomon Partners', group: 'Generalist', location: 'New York, NY' },
                    { name: 'Nihal Singh', company: 'Morgan Stanley', group: 'Technology', location: 'Menlo Park, CA' },
                    { name: 'Patrick Lin', company: 'Wells Fargo', group: 'Technology M&A', location: 'San Francisco, CA' },
                    { name: 'Russell Kang', company: 'Centerview Partners', group: 'Generalist', location: 'New York, NY' }
                ],
                'Finance': [
                    { name: 'Claire Liang', company: 'Point72', group: 'L/S Equities', location: 'New York, NY' },
                    { name: 'Kristen Joo', company: 'Citadel', group: 'L/S Equities', location: 'New York, NY' },
                    { name: 'Sathya Panchu', company: 'WestBridge Capital', group: 'Crossover', location: 'San Mateo, CA' },
                    { name: 'Jason Cai', company: 'Accel-KKR', group: 'Tech Private Equity', location: 'Menlo Park, CA' },
                    { name: 'Harshita Somani', company: 'The Carlyle Group', group: 'Private Equity/Private Credit', location: 'New York, NY' }
                ]
            }
        },
        2024: {
            fullTime: {
                'Investment Banking': [
                    { name: 'Azan Ahmed', company: 'Centerview Partners', group: 'Life Sciences', location: 'San Francisco, CA' },
                    { name: 'Carolyn Lu', company: 'Evercore', group: 'Technology M&A', location: 'Menlo Park, CA' },
                    { name: 'Aaron Chiang', company: 'UBS', group: 'Financial Sponsors and Leveraged Finance', location: 'Los Angeles, CA' },
                    { name: 'Jessica Yang', company: 'Perella Weinberg Partners', group: 'Technology M&A', location: 'San Francisco, CA' },
                    { name: 'Nathan Vuong', company: 'Morgan Stanley', group: 'Financial Sponsors & Western Region Coverage', location: 'San Francisco, CA' },
                    { name: 'Rafael Grande', company: 'Centerview Partners', group: 'Technology', location: 'Palo Alto, CA' }
                ],
                'Consulting': [
                    { name: 'Amit Dunevich', company: 'Bain & Company', group: 'Generalist', location: 'San Francisco, CA' },
                    { name: 'Annabell Su', company: 'Bain & Company', group: 'Private Equity Group', location: 'San Francisco, CA' },
                    { name: 'Eugene Jang', company: 'EY-Parthenon', group: 'Strategy & Transactions', location: 'San Francisco, CA' },
                    { name: 'Roma Bedekar', company: 'GRAPH Strategy', group: 'Strategy', location: 'Washington, D.C.' }
                ],
                'Finance': [
                    { name: 'Albert Li', company: 'Warburg Pincus', group: 'Generalist', location: 'New York, NY' },
                    { name: 'Michael Huang', company: 'Audax Private Equity', group: 'Generalist', location: 'San Francisco, CA' }
                ],
                'Technology': [
                    { name: 'Tia Chang', company: 'Databricks', group: 'Product Management', location: 'San Francisco, CA' }
                ]
            },
            summer: {
                'Investment Banking': [
                    { name: 'Hailey Kim', company: 'Barclays', group: 'Generalist', location: 'New York, NY' },
                    { name: 'Anson Seto', company: 'Barclays', group: 'Healthcare', location: 'San Francisco, CA' },
                    { name: 'Joyce Chiang', company: 'Morgan Stanley', group: 'Financial Sponsors & Western Region Coverage', location: 'San Francisco, CA' },
                    { name: 'Kevin Seog', company: 'Barclays', group: 'Generalist', location: 'New York, NY' },
                    { name: 'Max Sarwar', company: 'Barclays', group: 'Technology', location: 'San Francisco, CA' },
                    { name: 'Nihal Singh', company: 'Bank of America', group: 'Technology', location: 'Palo Alto, CA' },
                    { name: 'Richard Criley', company: 'Centerview Partners', group: 'Life Sciences', location: 'San Francisco, CA' },
                    { name: 'Russell Kang', company: 'Deutsche Bank', group: 'Technology Coverage', location: 'San Francisco, CA' },
                    { name: 'Sahil Malhotra', company: 'Wells Fargo', group: 'Healthcare', location: 'San Francisco, CA' },
                    { name: 'Claire Liang', company: 'Nomura', group: 'GreenTech', location: 'San Francisco, CA' },
                    { name: 'Winston Lan', company: 'Morgan Stanley', group: 'Generalist', location: 'New York, NY' }
                ],
                'Consulting': [
                    { name: 'Rose Li', company: 'Bain & Company', group: 'Generalist', location: 'San Francisco, CA' },
                    { name: 'Thomas Gerken', company: 'Bain & Company', group: 'Generalist', location: 'San Francisco, CA' },
                    { name: 'Maya Wu', company: 'L.E.K Consulting', group: 'Generalist', location: 'San Francisco, CA' }
                ],
                'Finance': [
                    { name: 'Paari Thanikachalam', company: 'Vista Equity Partners', group: 'Private Equity', location: 'Austin, TX' },
                    { name: 'Ron Akashi', company: 'Franklin Templeton', group: 'Equities', location: 'San Francisco, CA' }
                ]
            }
        }
        // Add more years as needed...
    }
};

// Template functions
function generateShortcuts() {
    return careersData.shortcuts.map(shortcut =>
        `<p><a href="#${shortcut.id}">${shortcut.year}</a></p>`
    ).join('\n  ');
}

function generateCareerEntry(entry) {
    return `<div class="careers-table-entry">
  <div class="name">${entry.name}</div><div class="company">${entry.company}</div><div class="group">${entry.group}</div><div class="location">${entry.location}</div>
</div>`;
}

function generateCareerCategory(categoryName, entries) {
    if (!entries || entries.length === 0) return '';

    const categoryHeader = `<div class="careers-table-category">${categoryName}</div>`;
    const entriesHtml = entries.map(entry => generateCareerEntry(entry)).join('\n');
    return categoryHeader + '\n' + entriesHtml;
}

function generateCareerTable(year, type) {
    const data = careersData.careers[year]?.[type];
    if (!data) return '';

    const tableHeader = `<div class="careers-table">
  <div>
    <div class="careers-table-header name">Name</div><div class="careers-table-header company">Company</div><div class="careers-table-header group">Group</div><div class="careers-table-header location">Location</div>
  </div>`;

    const categoriesHtml = Object.entries(data)
        .map(([categoryName, entries]) => generateCareerCategory(categoryName, entries))
        .filter(html => html) // Remove empty categories
        .join('\n');

    return tableHeader + '\n' + categoriesHtml + '\n</div>';
}

function generateCareerSection(year, type) {
    const typeLabel = type === 'fullTime' ? 'Full-Time Careers' : 'Summer Internships';
    const id = type === 'fullTime' ? `full-time-${year}` : `summer-${year}`;

    return `<h3 id="${id}" class="careers-table-label">${year} ${typeLabel}<a href="#top" class="back-to-top">(back to top)</a></h3>
${generateCareerTable(year, type)}`;
}

// Main function to generate all career content
function generateAllCareersContent() {
    const years = Object.keys(careersData.careers).sort((a, b) => b - a); // Sort years descending

    let content = '';

    years.forEach(year => {
        // Add full-time careers
        content += generateCareerSection(year, 'fullTime') + '\n\n';

        // Add summer internships
        content += generateCareerSection(year, 'summer') + '\n\n';
    });

    return content;
}

// Export for use in HTML
window.careersData = careersData;
window.generateShortcuts = generateShortcuts;
window.generateAllCareersContent = generateAllCareersContent;
