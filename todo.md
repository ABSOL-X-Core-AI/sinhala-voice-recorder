# Sinhala Phoneme Voice Dataset Recorder - TODO

## Core Features

### Database & Backend
- [x] Create phoneme table with ID, text, phoneme, category, status fields
- [x] Create recording table with user_id, phoneme_id, file_key, duration, sample_rate, status, notes
- [x] Create tRPC procedures for CRUD operations on phonemes and recordings
- [x] Implement role-based access control (contributor vs admin)
- [x] Add presigned URL endpoint for audio playback (/api/audio-url)
- [ ] Add owner notification system for batch submissions

### UI - Spreadsheet Table (Google Sheets Style)
- [x] Build Google Sheets-style spreadsheet UI with title bar, menu, toolbar
- [x] Columns: ID, Target Phoneme, Script, Audio File Name, Action, Status, Audio Link, Notes
- [x] Implement column letter headers (A, B, C...) and row numbers
- [x] Add color-coded action buttons per row (Record, Pass, Delete, Approve)
- [x] Add color-coded status badges (Pending, Recorded, Approved, Passed, Deleted)
- [x] Add "How it works" panel with workflow explanation
- [x] Add "Status Meanings" reference panel
- [x] Add tips bar at bottom
- [x] Progress tracker (42/250 format with percentage)
- [x] Link to Focused Recorder mode

### Audio Recording Feature (Spreadsheet Modal)
- [x] Build recording modal with phoneme info display
- [x] Implement real-time waveform visualization
- [x] Add record/stop/re-record/play controls
- [x] Implement audio file upload to cloud storage
- [x] Persist recording metadata (file_key, duration, sample_rate)
- [x] Max recording time (10 seconds with auto-stop)
- [x] Delete and Save & Next buttons

### Dedicated Focused Recorder Page
- [x] Full-screen focused recorder with one phoneme at a time
- [x] Large Script display with Target Phoneme section
- [x] Notes field (editable)
- [x] Session Progress indicator
- [x] Summary bar at top showing current record info
- [x] Big microphone button with visual recording indicator
- [x] Timer (00:00 / 00:10)
- [x] Waveform visualization
- [x] Audio Level meter (color-coded)
- [x] Three action buttons: DELETE (red), PASS (yellow), RECORD (green)
- [x] Previous/Next navigation
- [x] Ready to record / Recording / Recorded status indicator
- [x] Tips at the bottom

### Status Management
- [x] Implement status badges with color coding
- [x] Add single-row status update capability
- [x] Add bulk status update for multiple recordings
- [x] Implement admin approval/rejection workflow

### Progress Dashboard
- [x] Display total recordings count
- [x] Show completion percentage
- [x] Show approved recordings count
- [x] Display per-category breakdown
- [x] Add visual progress indicators

### Admin Review Panel
- [x] Build admin-only review interface
- [x] Quick approve/reject buttons per recording
- [x] Status filter bar (All, Recorded, Approved, Passed, etc.)
- [x] Add review dialog with notes field
- [x] Statistics cards (Total, Recorded, Pending, Approved, Deleted)
- [x] Restrict access to admin role only

### Onboarding & Guidance
- [x] Create "How it works" panel with workflow explanation
- [x] Build recording tips in modals and pages
- [x] Add pronunciation tips and best practices

### Authentication & Authorization
- [x] Implement user authentication with Manus OAuth
- [x] Set up role-based access (contributors vs admins)
- [x] Restrict recording feature to contributors
- [x] Restrict admin panel to admins only

### Cloud Storage Integration
- [x] Set up S3 storage for audio files
- [x] Implement audio file upload workflow
- [x] Store file metadata in database
- [x] Generate presigned URLs for playback (/api/audio-url)

### Seed Data
- [x] 250 phoneme-targeted Sinhala sentences
- [x] 16 categories: consonants, vowels, vowel-signs, conjuncts, daily-conversation,
      numbers, formal, nature, technology, food-culture, education, sports, health,
      travel, emotions, complex, minimal-pairs, tongue-twisters, commands, questions,
      proverbs, common-phrases, rare-phonemes

## Future Enhancements
- [ ] Audio waveform playback visualization in admin panel
- [ ] Batch export of approved recordings (ZIP download)
- [ ] Multi-speaker support with speaker metadata
- [ ] Real-time collaboration (multiple contributors)
- [ ] Mobile-optimized recorder view
- [ ] Keyboard shortcuts for recorder navigation
