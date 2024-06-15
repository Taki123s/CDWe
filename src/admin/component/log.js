import React, { useState, useEffect } from 'react';
import { fetchLogs, archiveLogs, deleteLogs } from '../../service/LogService';

function LogViewer() {
    const [logs, setLogs] = useState([]);
    const [archivePath, setArchivePath] = useState('');
    const [error, setError] = useState('');

    const handleFetchLogs = async () => {
        try {
            const data = await fetchLogs();
            setLogs(data);
            setError('');
        } catch (err) {
            setError('Failed to fetch logs');
        }
    };

    const handleArchiveLogs = async () => {
        try {
            const blob = await archiveLogs(archivePath);
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = 'logs.zip';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            setError('');
        } catch (err) {
            setError('Failed to archive logs');
        }
    };

    const handleDeleteLogs = async () => {
        try {
            await deleteLogs();
            setLogs([]);
            setError('');
        } catch (err) {
            setError('Failed to delete logs');
        }
    };

    // Sử dụng useEffect để tự động gọi handleFetchLogs khi component được mount
    useEffect(() => {
        handleFetchLogs();
    }, []);

    return (
        <div>
            <h1>Log Viewer</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <pre>{logs.join('\n')}</pre>
            <input
                type="text"
                value={archivePath}
                onChange={(e) => setArchivePath(e.target.value)}
                placeholder="Enter archive path"
            />
            <button onClick={handleFetchLogs}>Fetch Logs</button>
            <button onClick={handleArchiveLogs}>Archive Logs</button>
            <button onClick={handleDeleteLogs}>Delete Logs</button>
        </div>
    );
}

export default LogViewer;
