function intToIp(num) {
    // Convert the number to its binary representation
    const binary = num.toString(2).padStart(32, '0');

    // Split the binary representation into 4 octets
    const octets = [
        binary.slice(0, 8),
        binary.slice(8, 16),
        binary.slice(16, 24),
        binary.slice(24),
    ];

    // Convert each octet from binary to decimal
    const decimals = octets.map((octet) => parseInt(octet, 2));

    // Join the decimal octets with periods to form the IP address
    const ipAddress = decimals.join('.');

    return ipAddress;
}

// Example usage
document.write('Example 1: ');
document.write(intToIp(2149583361) + ' ');
document.write('Example 2: ');
document.write(intToIp(32) + ' ');
document.write('Example 3: ');
document.write(intToIp(0) + ' ');
