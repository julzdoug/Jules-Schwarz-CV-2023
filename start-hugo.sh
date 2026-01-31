#!/bin/bash
# Quick commands for your Hugo portfolio

HUGO_BIN="/home/julesschwarz/.local/bin/hugo"

echo "🚀 Hugo Commands Reference"
echo "=========================="
echo ""
echo "Development Server:"
echo "  $HUGO_BIN server"
echo ""
echo "Build for Production:"
echo "  $HUGO_BIN"
echo ""
echo "Create New Content:"
echo "  $HUGO_BIN new content/project-name.md"
echo ""
echo "Start Server Now:"
cd /home/julesschwarz/JulesDevPage/Jules-Schwarz-CV-2023
$HUGO_BIN server --bind=0.0.0.0
