document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('mspForm');
    const monthlyCostTotal = document.getElementById('monthlyCostTotal');
    const monthlyMsrpTotal = document.getElementById('monthlyMsrpTotal');
    const annualCostTotal = document.getElementById('annualCostTotal');
    const annualMsrpTotal = document.getElementById('annualMsrpTotal');
    const generateOutputButton = document.getElementById('generate-output-btn');
    generateOutputButton.addEventListener('click', generateOutput);

    const categories = [
        {
            name: 'Remote Monitoring and Management',
            items: [
                {
                    name: 'NerdAssure for Servers',
                    cost: 4.00,
                    msrp: 30.00
                },
                {
                    name: 'NerdAssure for Workstations',
                    cost: 4.00,
                    msrp: 15.00
                }
            ]
        },
        {
            name: 'Endpoint Security',
            items: [
                {
                    name: 'Malwarebytes Endpoint Security',
                    cost: 0.90,
                    msrp: 2.00
                },
                {
                    name: 'Malwarebytes with EDR',
                    cost: 2.40,
                    msrp: 5.00
                },
                {
                    name: 'Threatlocker - App,Storage,Elevation,Ringfencing Control',
                    cost: 3.40,
                    msrp: 9.00
                }
            ]
        },
        {
            name: 'Backup',
            items: [
                {
                    name: 'Acronis Cyber Protect - Workstation *add data usage',
                    cost: 1.99,
                    msrp: 5.00
                },
                {
                    name: 'Acronis Cyber Protect - Server *add data usage',
                    cost: 15.30,
                    msrp: 24.00
                },
                {
                    name: 'Acronis Cyber Protect - Data Usage(GB) *add workload from above',
                    cost: 0.02,
                    msrp: 0.10
                },
                {
                    name: 'Axcient - Workstation',
                    cost: 6,
                    msrp: 30
                },
                {
                    name: 'Axcient - Server',
                    cost: 35,
                    msrp: 99
                }
            ]
        },
        {
            name: 'Productivity Suite',
            items: [
                {
                    name: 'M365 Business Basic',
                    cost: 6.04,
                    msrp: 7.20
                },
                {
                    name: 'M365 Business Standard',
                    cost: 12.60,
                    msrp: 15.00
                },
                {
                    name: 'M365 Business Premium*Includes Intune',
                    cost: 22.17,
                    msrp: 26.40
                },
                {
                    name: 'M365 Business Desktop Apps Only',
                    cost: 8.36,
                    msrp: 9.96
                },
                {
                    name: 'M365 Intune',
                    cost: 8.06,
                    msrp: 9.60
                }
            ]
        },
        {
            name: 'Email Security',
            items: [
                {
                    name: 'Proofpoint Essentials Beginner',
                    cost: 1.13,
                    msrp: 2.00
                },
                {
                    name: 'Proofpoint Essentials Business',
                    cost: 2.07,
                    msrp: 4.00
                },
                {
                    name: 'Proofpoint Essentials Advanced',
                    cost: 2.82,
                    msrp: 5.30
                },
                {
                    name: 'Proofpoint Essentials Professional',
                    cost: 3.99,
                    msrp: 7.00
                }
            ]
        },
        {
            name: 'Firewalls',
            items: [
                {
                    name: 'Watchguard T40W w/Basic Security',
                    cost: 48.04,
                    msrp: 119.00
                },
                {
                    name: 'Watchguard T40 w/Basic Security',
                    cost: 39.57,
                    msrp: 99.00
                },
                {
                    name: 'Watchguard AP130 w/Standard Wifi',
                    cost: 14.70,
                    msrp: 25.00
                },
                {
                    name: 'Cytracom Hardware Appliance (add $199 for One-Time Setup Fee)',
                    cost: 99.00,
                    msrp: 160.00
                },
                {
                    name: 'Cytracom Virtual Only (includes 10 agents)',
                    cost: 99.00,
                    msrp: 160.00
                },
                {
                    name: 'Cytracom Agents',
                    cost: 8.00,
                    msrp: 12.00
                }
            ]
        },
        {
            name: 'Productivity Suite Backup',
            items: [
                {
                    name: 'DropSuite Business Backup + Email Archiving',
                    cost: 2.80,
                    msrp: 4.00
                }
            ]
        },
        {
            name: 'Labor',
            items: [
                {
                    name: 'Prepaid Hours\\Month',
                    cost: 0,
                    msrp: 179.00
                }
            ]
        }
    ];

    // Code continues below with the "categories.forEach" logic and subsequent functions.
    
        categories.forEach(category => {
            const categoryContainer = document.createElement('div');
            categoryContainer.className = 'category-container';
            form.appendChild(categoryContainer);
    
            const categoryLabel = document.createElement('h2');
            categoryLabel.textContent = category.name;
            categoryContainer.appendChild(categoryLabel);
    
            const columnHeaderRow = document.createElement('div');
            columnHeaderRow.className = 'row';
            categoryContainer.appendChild(columnHeaderRow);
    
            const emptyHeader = document.createElement('div');
            columnHeaderRow.appendChild(emptyHeader);
    
            const costHeader = document.createElement('div');
            costHeader.textContent = 'Cost';
            columnHeaderRow.appendChild(costHeader);
    
            const msrpHeader = document.createElement('div');
            msrpHeader.textContent = 'MSRP';
            columnHeaderRow.appendChild(msrpHeader);
    
            const quantityHeader = document.createElement('div');
            quantityHeader.textContent = 'Quantity';
            columnHeaderRow.appendChild(quantityHeader);
    
            const totalCostHeader = document.createElement('div');
            totalCostHeader.textContent = 'Total Cost';
            columnHeaderRow.appendChild(totalCostHeader);
    
            const totalMsrpHeader = document.createElement('div');
            totalMsrpHeader.textContent = 'Total MSRP';
            columnHeaderRow.appendChild(totalMsrpHeader);
    
            category.items.forEach(item => {
                const row = document.createElement('div');
                row.className = 'row';
                categoryContainer.appendChild(row);
    
                const label = document.createElement('label');
                label.textContent = item.name;
                row.appendChild(label);
    
                const costInput = document.createElement('input');
                costInput.type = 'text';
                costInput.value = item.cost.toFixed(2);
                costInput.addEventListener('input', updateTotals);
                row.appendChild(costInput);
    
                const msrpInput = document.createElement('input');
                msrpInput.type = 'text';
                msrpInput.value = item.msrp.toFixed(2);
                msrpInput.addEventListener('input', updateTotals);
                row.appendChild(msrpInput);
    
                const itemId = item.name.replace(/\s+/g, '-').toLowerCase();
                const input = document.createElement('input');
                input.id = `${itemId}-quantity`;
                input.type = 'number';
                input.min = 0;
                input.value = 0;
                input.dataset.cost = item.cost;
                input.dataset.msrp = item.msrp;
                input.addEventListener('input', updateTotals);
                row.appendChild(input);
    
                const itemCostTotal = document.createElement('span');
                itemCostTotal.id = `${itemId}-total-cost`;
    
                itemCostTotal.textContent = '$0.00';
                row.appendChild(itemCostTotal);
    
                const itemMsrpTotal = document.createElement('span');
                itemMsrpTotal.id = `${itemId}-total-msrp`;
    
                itemMsrpTotal.textContent = '$0.00';
                row.appendChild(itemMsrpTotal);
            });
        });
    
        function updateTotals() {
            let totalCost = 0;
            let totalMsrp = 0;
    
            const inputs = form.querySelectorAll('input[type="number"]');
            inputs.forEach(input => {
                const costInput = input.previousElementSibling.previousElementSibling;
                const msrpInput = input.previousElementSibling;
                const cost = parseFloat(costInput.value);
                const msrp = parseFloat(msrpInput.value);
                const quantity = parseFloat(input.value);
    
                totalCost += cost * quantity;
                totalMsrp += msrp * quantity;
    
                const itemCostTotal = input.nextElementSibling;
                const itemMsrpTotal = input.nextElementSibling.nextElementSibling;
    
                itemCostTotal.textContent = `$${(cost * quantity).toFixed(2)}`;
                itemMsrpTotal.textContent = `$${(msrp * quantity).toFixed(2)}`;
            });
    
            monthlyCostTotal.textContent = `$${totalCost.toFixed(2)}`;
            monthlyMsrpTotal.textContent = `$${totalMsrp.toFixed(2)}`;
            annualCostTotal.textContent = `$${(totalCost * 12).toFixed(2)}`;
            annualMsrpTotal.textContent = `$${(totalMsrp * 12).toFixed(2)}`;
        }
    
        function getCategoryDescription(categoryName) {
            const descriptions = {
                'Remote Monitoring and Management': 'Remote Monitoring and Management (RMM) is a service that proactively manages and monitors your IT infrastructure to ensure smooth and efficient operations.',
                'Endpoint Security': 'Endpoint Security: Continuous monitoring of endpoints for a broad range of threats, including sophisticated attacks that may bypass traditional antivirus. Includes advanced behavioral analysis to identify suspicious activities, even from previously unknown or "zero-day" threats.',
                'Backup':'Data Backup: Secure off-site data storage with rapid system restoration and file recovery. We prioritize the use of cloud technology in our backup solutions to provide an optimal combination of security and accessibility for your data.',
                'Productivity Suite': 'Productivity Suite: Email, word processing, spreadsheets, presentations, and collaboration tools, designed to improve efficiency and collaboration within your organization.',
                'Productivity Suite Backup': 'Cloud-based email backup and archiving',
                'Email Security': 'Email Security: protection against email-based threats, including spam, phishing, and malware. Utilizes advanced filtering techniques and threat intelligence to detect and block malicious content before it reaches your inbox',
                'Firewalls': 'Firewall: Robust network security that safeguards your IT infrastructure by monitoring and controlling incoming and outgoing network traffic. Our firewall solutions employ advanced security features such as intrusion detection and prevention, VPN support, and application control to provide a comprehensive defense against cyber threats.',
                

            };
            return descriptions[categoryName] || '';
        }    

        function generateOutput() {
            const outputSection = document.getElementById('output-section');
            outputSection.innerHTML = '';
        
            const monthlyTotalMsrp = monthlyMsrpTotal.textContent;
        
            const outputLines = [
                `Monthly Total: ${monthlyTotalMsrp}`,
            ];
        
            categories.forEach(category => {
                let hasItems = false;
                category.items.forEach(item => {
                    const itemId = item.name.replace(/\s+/g, '-').toLowerCase();
                    const quantity = document.getElementById(`${itemId}-quantity`).value;
        
                    if (quantity > 0) {
                        hasItems = true;
                    }
                });
        
                if (hasItems) {
                    const categoryDescription = getCategoryDescription(category.name);
                    outputLines.push(`<li>${categoryDescription}</li>`);
                }
            });
    
            const whatsExcluded = [
                "What's Excluded:",
                'Projects',
                'Support of employees\' home computers and support of equipment at locations not specified in an agreement.',
                'Hardware and software costs associated with updates, upgrades, or repair.',
            ];    

            outputSection.innerHTML = `
        <h2>Services Included</h2>
        <ul>${outputLines.join('')}</ul>
        <br>
        <h2>${whatsExcluded[0]}</h2>
        <ul>
            <li>${whatsExcluded[1]}</li>
            <li>${whatsExcluded[2]}</li>
            <li>${whatsExcluded[3]}</li>
        </ul>
    `;
        }
    });